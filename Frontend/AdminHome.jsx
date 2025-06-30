import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/admin/users">View All Users</Link></li>
        <li><Link to="/admin/properties">View All Properties</Link></li>
        <li><Link to="/admin/bookings">View All Bookings</Link></li>
      </ul>
    </div>
  );
};

export default AdminHome;
