import React, { useState } from 'react';
import axios from 'axios';

const AddProperty = () => {
  const [property, setProperty] = useState({
    title: '',
    location: '',
    price: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:5000/api/owners/add-property', property, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Property added successfully!');
    } catch (error) {
      alert('Error adding property');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Property</h2>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
      <button type="submit">Add Property</button>
    </form>
  );
};

export default AddProperty;
