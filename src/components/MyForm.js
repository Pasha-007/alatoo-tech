// // src/components/MyForm.js
// import React, { useState } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, push } from 'firebase/database';
// import './MyForm.css';

// // Initialize Firebase (replace with your own config)
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: 'https://test-one-d41c8-default-rtdb.asia-southeast1.firebasedatabase.app',
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_PROCESS_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//   };
//   const app = initializeApp(firebaseConfig);
//   const database = getDatabase(app);
  
//   const MyForm = () => {
//     const [formData, setFormData] = useState({
//       name: '',
//       surname: '',
//       phoneNumber: '',
//       dob: '',
//     });
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         // Store form data in Firebase Realtime Database
//         await push(ref(database, 'submissions'), {
//           name: formData.name,
//           surname: formData.surname,
//           phoneNumber: formData.phoneNumber,
//           dob: formData.dob,
//         });
  
//         alert('Form submitted successfully!');
//       } catch (error) {
//         console.error('Error submitting form:', error);
//         alert('Error submitting form. Please try again.');
//       }
//     };
  
//     return (
//       <form className="form-container" onSubmit={handleSubmit}>
//         <h2>Submit Your Information</h2>
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Surname:</label>
//           <input
//             type="text"
//             name="surname"
//             value={formData.surname}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Phone Number:</label>
//           <input
//             type="text"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Date of Birth:</label>
//           <input
//             type="date"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   };
  
//   export default MyForm;