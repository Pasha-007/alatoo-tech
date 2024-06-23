import React, { useState } from 'react';
import { getDatabase, ref, push, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import './MyForm.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

// Initialize Firebase (replace with your own config)
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  };
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  
  const MyForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      surname: '',
      phoneNumber: '',
      dob: '',
    });
    const [user] = useAuthState(auth);
    const database = getDatabase();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!user) {
        alert('Please log in to submit your information.');
        return;
      }
  
      try {
        // Store form data in Firebase Realtime Database under the user's UID
        await set(ref(database, `submissions/${user.uid}`), {
          name: formData.name,
          surname: formData.surname,
          phoneNumber: formData.phoneNumber,
          dob: formData.dob,
        });
  
        alert('Form submitted successfully!');
        // Clear the form after submission
        setFormData({
          name: '',
          surname: '',
          phoneNumber: '',
          dob: '',
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form. Please try again.');
      }
    };
  
    return (
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Submit Your Information</h2>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Surname:</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default MyForm;