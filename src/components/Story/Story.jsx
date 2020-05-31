import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  return (
    <section className="story" data-testid="story">
      <div className="container">
        <div className="story__header">
          <div className="user">
            <Link className="user__thumb" to={`/users/${user.username}`}>
              <img src={user.avatar} alt="" />
            </Link>
            <Link className="user__name" to={`/users/${user.username}`}>
              {user.name}
            </Link>
          </div>
          <button className="story__close" onClick={handleClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Story;
