import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/bookings')
      .then(res => setBookings(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h3>All Bookings</h3>
      <table>
        <thead>
          <tr>
            <th>User ID</th><th>Property ID</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b._id}>
              <td>{b.userId}</td><td>{b.propertyId}</td><td>{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBookings;
