import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Common
import Home from './common/Home';
import Login from './common/Login';
import Register from './common/Register';
import ForgotPassword from './common/ForgotPassword';

// Admin
import AdminHome from './admin/AdminHome';
import AllUsers from './admin/AllUsers';
import AllProperty from './admin/AllProperty';
import AllBookings from './admin/AllBookings';

// Owner
import OwnerHome from './Owner/OwnerHome';
import AddProperty from './Owner/AddProperty';
import AllOwnerProperties from './Owner/AllProperties';
import OwnerBookings from './Owner/AllBookings';

// Renter
import RenterHome from './renter/RenterHome';
import RenterProperties from './renter/AllProperties';

function App() {
  return (
    <Routes>
      {/* Common Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/admin/users" element={<AllUsers />} />
      <Route path="/admin/properties" element={<AllProperty />} />
      <Route path="/admin/bookings" element={<AllBookings />} />

      {/* Owner Routes */}
      <Route path="/owner" element={<OwnerHome />} />
      <Route path="/owner/add-property" element={<AddProperty />} />
      <Route path="/owner/my-properties" element={<AllOwnerProperties />} />
      <Route path="/owner/bookings" element={<OwnerBookings />} />

      {/* Renter Routes */}
      <Route path="/renter" element={<RenterHome />} />
      <Route path="/renter/properties" element={<RenterProperties />} />
    </Routes>
  );
}

export default App;
