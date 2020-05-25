import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';

import usersMock from '../../__tests__/bha_mocks/users';

const UsersRoute = () => {
  return (
    <div className="container">
      <UsersList users={usersMock} />
    </div>
  );
};

export default UsersRoute;
