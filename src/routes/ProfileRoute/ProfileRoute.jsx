import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

import postsMock from '../../__tests__/bha_mocks/posts';
import usersMock from '../../__tests__/bha_mocks/users';

const ProfileRoute = () => {
  const username = window.location.pathname.split('/').pop()
  const user = usersMock.find(user => user.username === username)
  const posts = postsMock.filter(post => post.userId === user.id)

  return (
    <div>
      <UserProfile username={username} avatar={user.avatar} name={user.name} />
      <UserPosts posts={posts} />
    </div>
  );
};

export default ProfileRoute;
