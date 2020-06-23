import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <h1>Profile</h1>
      <p>Coming Soon!</p>
      <p>Edit your user profile and app settings</p>
    </div>
  );
};

export default Profile;
