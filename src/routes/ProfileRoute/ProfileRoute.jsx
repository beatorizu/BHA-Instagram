import React, { useState, useEffect } from 'react';

import ApiUrl from '../../setupApi'

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  const [isLoading, toggleLoading] = useState(true)

  useEffect(() => {
    const username = window.location.pathname.split('/').pop()

    fetch(`${ApiUrl}/users`)
      .then(response => response.json())
      .then(data => setUser(data.find(user => user.username === username)))
  }, [])

  useEffect(() => {
    if (user.id) {
      fetch(`${ApiUrl}/users/${user.id}/posts`)
        .then(response => response.json())
        .then(data => {
          setPosts(data);
          toggleLoading(false);
        });
    }
  }, [user.id])

  return (
    <div>
        <UserProfile username={user.username} avatar={user.avatar} name={user.name} />
      {isLoading
        ? <Loading />
        : <UserPosts posts={posts} />
      }
    </div>
  );
};

export default ProfileRoute;
