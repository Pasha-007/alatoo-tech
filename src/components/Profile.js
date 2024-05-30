import React, { useState } from 'react';
import { auth } from '../firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import './Profile.css'; // CSS for styling

const Profile = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [cv, setCv] = useState(null);
  const storage = getStorage();
  const firestore = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (cv) {
        const cvRef = ref(storage, `cvs/${auth.currentUser.uid}`);
        await uploadBytes(cvRef, cv);
        const cvUrl = await getDownloadURL(cvRef);

        await setDoc(doc(firestore, 'users', auth.currentUser.uid), {
          phoneNumber,
          birthdate,
          cvUrl,
        });
      } else {
        await setDoc(doc(firestore, 'users', auth.currentUser.uid), {
          phoneNumber,
          birthdate,
        });
      }
      alert('Profile updated successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-form">
          <h1>Your Profile</h1>
          <p>Please provide your information below to help us learn more about you. This will enable us to tailor our services to better meet your needs.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Your Surname:</label>
              <input type="text" id="surname" placeholder="Surname" />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Your Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+996 XXX XXX XXX"
              />
            </div>
            <div className="form-group">
              <label htmlFor="birthdate">Your Age:</label>
              <input
                type="date"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cv">Your CV (PDF only):</label>
              <input
                type="file"
                id="cv"
                onChange={(e) => setCv(e.target.files[0])}
                accept="application/pdf"
              />
            </div>
            <button type="submit">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
