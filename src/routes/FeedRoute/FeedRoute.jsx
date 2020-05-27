import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

import postsMock from '../../__tests__/bha_mocks/posts';
import usersMock from '../../__tests__/bha_mocks/users';

const FeedRoute = () => {
  const getPostUserById = postUserId => usersMock.find(user => postUserId === user.id)
  return (
    <div>
      <Posts posts={postsMock} getUserHandler={getPostUserById} />
    </div>
  );
};

export default FeedRoute;
