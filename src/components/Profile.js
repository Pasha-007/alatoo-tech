import React, { useState } from 'react';
import { auth } from '../firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import './Profile.css'; // CSS for styling

const countryCodes = [
  { code: 'US', dialCode: '+1' },
  { code: 'CA', dialCode: '+1' },
  { code: 'GB', dialCode: '+44' },
  // Add more country codes as needed
];

const Profile = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState(countryCodes[0].dialCode);
  const [birthdate, setBirthdate] = useState('');
  const [cv, setCv] = useState(null);
  const storage = getStorage();
  const firestore = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fullPhoneNumber = `${countryCode}${phoneNumber}`;
      if (cv) {
        const cvRef = ref(storage, `cvs/${auth.currentUser.uid}`);
        await uploadBytes(cvRef, cv);
        const cvUrl = await getDownloadURL(cvRef);

        await setDoc(doc(firestore, 'users', auth.currentUser.uid), {
          phoneNumber: fullPhoneNumber,
          birthdate,
          cvUrl,
        });
      } else {
        await setDoc(doc(firestore, 'users', auth.currentUser.uid), {
          phoneNumber: fullPhoneNumber,
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
      <div className="profile-form">
        <h1>Your Profile</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="countryCode">Country Code:</label>
          <select
            id="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            {countryCodes.map((country) => (
              <option key={country.code} value={country.dialCode}>
                {country.code} {country.dialCode}
              </option>
            ))}
          </select>

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
          />

          <label htmlFor="birthdate">Birthdate:</label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            placeholder="Enter your birthdate"
          />

          <label htmlFor="cv">Upload CV (PDF only):</label>
          <input
            type="file"
            id="cv"
            onChange={(e) => setCv(e.target.files[0])}
            accept="application/pdf"
          />

          <button type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
