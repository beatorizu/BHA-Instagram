import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  return (
    <article className="post" data-testid="post">
      {userInfo && (
        <header className="post__header">
          <div className="user">
            <Link className="user__thumb" to={`/users/${userInfo.username}`}>
              <img src={userInfo.avatar} alt=""/>
            </Link>
            <Link className="user__name" to={`/users/${userInfo.username}`}>{userInfo.name}</Link>
          </div>
          <button className="post__context">
            <span className="follow-btn">Seguir</span>
          </button>
        </header>
      )}
      <figure className="post__figure">
        <img src={postInfo.imageUrl} alt="" />
      </figure>
      {userInfo && (
        <nav className="post__controls">
          <button className="post__control">
            <i className="far fa-heart"></i>
          </button>
          <div className="post__status">
            <div className="user">
              <span>curtido por <a href="/">Santino Rowe</a> e outra <a href="/">1 pessoa.</a></span>
            </div>
          </div>
        </nav>
      )}
    </article>
  );
};

export default Post;
