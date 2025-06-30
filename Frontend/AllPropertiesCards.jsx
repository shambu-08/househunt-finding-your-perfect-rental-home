import React from 'react';

const AllPropertiesCards = ({ property }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', margin: '10px', width: '250px' }}>
      <img src={property.image} alt={property.title} width="100%" height="150px" />
      <h4>{property.title}</h4>
      <p>{property.location}</p>
      <p><strong>₹{property.price}</strong></p>
      <p>{property.description}</p>
    </div>
  );
};

export default AllPropertiesCards;
