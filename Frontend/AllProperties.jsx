import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/owners/my-properties', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setProperties(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>My Listed Properties</h2>
      {properties.map((prop) => (
        <div key={prop._id} style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
          <h4>{prop.title}</h4>
          <p>{prop.location}</p>
          <p>₹{prop.price}</p>
          <p>{prop.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProperties;
