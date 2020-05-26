import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts }) => (
  <div className="container" data-testid="user-posts">
    <section className="user-posts">
      {posts?.map(post => <Post postInfo={post} key={post.id} />)}
    </section>
  </div>
);

export default UserPosts;
