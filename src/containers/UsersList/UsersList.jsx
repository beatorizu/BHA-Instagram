import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UersList = ({ users }) => {
  return (
    <section className="users-list">
      {users?.map(user => <User infoUser={user} />)}
    </section>
  )
};

export default UersList;
