import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

import usersMock from '../../__tests__/bha_mocks/users';
const getPostUserById = postUserId => usersMock.find(user => postUserId === user.id)

const Post = ({ postInfo, userInfo }) => {
  const [ isLiked, toggleLike ] = useState(false);
  const [ isFollowing, toggleFollowing ] = useState(false);

  const { imageUrl, likes } = postInfo;
  const { username, name } = getPostUserById(likes[0].id);

  return (
    <article className="post" data-testid="post">
      {userInfo && (
        <header className="post__header">
          <div className="user">
            <Link className="user__thumb" to={`/users/${userInfo.username}`}>
              <img src={userInfo.avatar} alt="" />
            </Link>
            <Link className="user__name" to={`/users/${userInfo.username}`}>
              {userInfo.name}
            </Link>
          </div>
          <button
            className="post__context"
            onClick={() => toggleFollowing(!isFollowing)}
          >
            {isFollowing ? (
              <span className="follow-btn is-following">Seguindo</span>
            ) : (
              <span className="follow-btn">Seguir</span>
            )}
          </button>
        </header>
      )}
      <figure className="post__figure">
        <img src={imageUrl} alt="" />
      </figure>
      {userInfo && (
        <nav className="post__controls">
          <button
            className="post__control"
            onClick={() => toggleLike(!isLiked)}
          >
            {isLiked ? (
              <i className="fas fa-heart"></i>
            ) : (
              <i className="far fa-heart"></i>
            )}
          </button>
          <div className="post__status">
            <div className="user">
              {
                <span>
                  curtido por <Link to={`/users/${username}`}>{name}</Link>
                  {likes.length - 1 >= 1 &&
                    ` e outra${likes.length - 1 > 1 ? "s" : ""} pessoa${
                      likes.length - 1 > 1 ? "s" : ""
                    }`}
                </span>
              }
            </div>
          </div>
        </nav>
      )}
    </article>
  );
};

export default Post;
