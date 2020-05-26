import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const username = window.location.pathname.split('/').pop()
  return (
    <div>
      <UserProfile username={username} />
    </div>
  );
};

export default ProfileRoute;
