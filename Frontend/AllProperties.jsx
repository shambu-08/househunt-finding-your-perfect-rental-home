import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from './AllPropertiesCards';

const AllProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/properties')
      .then(res => setProperties(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Rental Properties</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
