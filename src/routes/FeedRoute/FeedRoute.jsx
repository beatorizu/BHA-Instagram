import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

import postsMock from '../../__tests__/bha_mocks/posts';

const FeedRoute = () => {
  return (
    <div>
      <Posts posts={postsMock} />
    </div>
  );
};

export default FeedRoute;
