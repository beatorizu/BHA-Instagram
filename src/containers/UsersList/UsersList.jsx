import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UersList = ({ users }) => {
  return (
    <section className="users-list">
      {users.length > 0
        ? users?.map(user => <User infoUser={user} key={user.id} />)
        : <Loading />
      }
    </section>
  )
};

export default UersList;
