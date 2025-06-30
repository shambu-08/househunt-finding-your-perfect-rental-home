import React from 'react';
import { Link } from 'react-router-dom';

const RenterHome = () => {
  return (
    <div>
      <h2>Renter Dashboard</h2>
      <ul>
        <li><Link to="/renter/properties">Browse All Properties</Link></li>
      </ul>
    </div>
  );
};

export default RenterHome;
