import React from 'react';
import { Link } from 'react-router-dom';

const OwnerHome = () => {
  return (
    <div>
      <h2>Owner Dashboard</h2>
      <ul>
        <li><Link to="/owner/add-property">Add Property</Link></li>
        <li><Link to="/owner/my-properties">My Properties</Link></li>
        <li><Link to="/owner/bookings">View Bookings</Link></li>
      </ul>
    </div>
  );
};

export default OwnerHome;
