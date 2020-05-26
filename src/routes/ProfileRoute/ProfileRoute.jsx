import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

import postsMock from '../../__tests__/bha_mocks/posts';

const ProfileRoute = () => {
  const username = window.location.pathname.split('/').pop()
  const avatar = "/img/profiles/momo-yaoyorozu/momo-yaoyorozu-profile.png"
  const name = username.charAt(0).toUpperCase() + username.slice(1)

  return (
    <div>
      <UserProfile username={username} avatar={avatar} name={name} />
      <UserPosts posts={postsMock} />
    </div>
  );
};

export default ProfileRoute;
