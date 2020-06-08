import React, { useState, useEffect } from 'react';

import ApiUrl from '../../setupApi'

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [usersFetched, setUsersFetched] = useState(0);

  const getUserById = userId => users.find(user => userId === user.id)

  useEffect(() => {
    (async function() {
      const response = await fetch(`${ApiUrl}/users`);
      const data = await response.json();
      setUsers(data);
    })();
  }, []);

  useEffect(() => {
    (async function() {
      const response = await fetch(`${ApiUrl}/stories`);
      const data = await response.json();
      data.isSeenStory = false;
      setStories(data);
    })();
  }, [users])

  useEffect(() => {
    if (usersFetched === users.length) {
      return;
    }

    (async function() {
      const response = await fetch(`${ApiUrl}/users/${users[usersFetched].id}/posts`);
      const data = await response.json();
      data.forEach(post => {
        post.likes.forEach(like => {
          const { name, username } = getUserById(like.id)
          like.name = name;
          like.username = username;
        });
      });
      setPosts([...posts, ...data]);
      setUsersFetched(usersFetched + 1);
    })();
  }, [users, usersFetched]);

  return (
    <div data-testid="feed-route">
      {(users.length > 0 && stories.length > 0) && (
        <Stories stories={stories} getUserHandler={getUserById} />
      )}
      {users.length !== usersFetched
        ? <Loading />
        : <Posts posts={posts} getUserHandler={getUserById} />
      }
    </div>
  );
};

export default FeedRoute;
