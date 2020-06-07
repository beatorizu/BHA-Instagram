import React, { useState, useEffect } from 'react';

import ApiUrl from '../../setupApi'

import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async function() {
      const response = await fetch(`${ApiUrl}/users`);
      const data = await response.json();
      setUsers(data);
    })();
  }, []);

  return (
    <div className="container">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
