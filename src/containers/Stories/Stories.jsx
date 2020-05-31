import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const showStory = false;
  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.slice(0)?.map(story => {
            const { avatar, name } = getUserHandler(story.userId);
            return (
              <button className="user__thumb" key={story.id}>
                <div className="user__thumb__wrapper">
                  <img src={avatar} alt={`${name}'s profile`} />
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {showStory && (
        <Story />
        )}
    </React.Fragment>
  );
};

export default Stories;
