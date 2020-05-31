import React, { useState, useEffect } from 'react';

import ApiUrl from '../../setupApi'

import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${ApiUrl}/users`)
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div className="container">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
