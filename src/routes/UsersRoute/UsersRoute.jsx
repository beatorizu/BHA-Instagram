import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://5ed1627e4e6d7200163a0839.mockapi.io/users')
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
