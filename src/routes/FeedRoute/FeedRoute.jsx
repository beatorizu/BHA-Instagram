import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [usersFetched, setUsersFetched] = useState(0);

  useEffect(() => {
    fetch('https://5ed1627e4e6d7200163a0839.mockapi.io/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);

  useEffect(() => {
    if (usersFetched === users.length) {
      return;
    }

    fetch(`https://5ed1627e4e6d7200163a0839.mockapi.io/users/${users[usersFetched].id}/posts`)
      .then(response => response.json())
      .then(data => {
        setPosts([...posts, ...data]);
        setUsersFetched(usersFetched + 1);
      });
  }, [users, usersFetched]);

  const getPostUserById = postUserId => users.find(user => postUserId === user.id)
  return (
    <div>
      <Posts posts={posts} getUserHandler={getPostUserById} />
    </div>
  );
};

export default FeedRoute;
