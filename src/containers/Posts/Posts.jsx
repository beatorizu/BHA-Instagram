import React from 'react';

import Post from '../../components/Post';

const userInfo = { "id": 1, "name": "Momo Yaoyorozu", "avatar": "/img/profiles/momo-yaoyorozu/momo-yaoyorozu-profile.png", "username": "momoyaoyorozu", "email": "momo.yaoyorozu@ua.jp" }

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    <section className="feed">
      {posts?.map(post => <Post postInfo={post} userInfo={userInfo} />)}
    </section>
  </div>
);

export default Posts;
