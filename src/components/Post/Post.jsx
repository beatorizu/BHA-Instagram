import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const userThumb = "/img/profiles/izuku-midoriya/izuku-midoriya-profile.jpg"
  return (
    <article className="post" data-testid="post">
      <header className="post__header">
        <div className="user">
          <a className="user__thumb" href="/">
            <img src={userThumb} alt=""/>
          </a>
          <a className="user_name" href="/">Potato</a>
        </div>
        <button className="post_context">
          <span className="follow-btn">Seguir</span>
        </button>
      </header>
      <figure className="post__figure">
        <img src={postInfo.imageUrl} alt="" />
      </figure>
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
    </article>
  );
};

export default Post;
