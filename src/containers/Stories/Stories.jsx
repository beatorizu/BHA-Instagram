import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, toggleShowStory] = useState(false);
  const [user, setUser] = useState({});
  const [story, setStory] = useState({});

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.slice(0)?.map(story => {
            const user = getUserHandler(story.userId);
            return (
              <button
                className="user__thumb"
                key={story.id}
                onClick={() => {
                  setUser(user);
                  setStory(story);
                  toggleShowStory(true);
                }}
              >
                <div className="user__thumb__wrapper">
                  <img src={user.avatar} alt={`${user.name}'s profile`} />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {showStory && (
        <Story
          user={user}
          handleClose={() => toggleShowStory(false)}
          story={story}
        />
      )}
    </React.Fragment>
  );
};

export default Stories;
