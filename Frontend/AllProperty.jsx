import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllProperty = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/properties')
      .then(res => setProperties(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h3>All Properties</h3>
      {properties.map(prop => (
        <div key={prop._id} style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
          <h4>{prop.title}</h4>
          <p>{prop.location} | ₹{prop.price}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProperty;
