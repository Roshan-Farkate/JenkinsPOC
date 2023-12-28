import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./UserForm.css"
const UserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    company: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8090/StudentDetails-0.0.1-SNAPSHOT/saveDetails', formData);
      setFormData({
        name: '',
        city: '',
        company: '',
      });
      alert('Data Saved');
    } catch (error) {
      alert('Error saving user data:');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>City: </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Company: </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="link-container">
        <Link to="/getData">List of Employees</Link>
      </div>
    </div>
  );
};

export default UserForm;
