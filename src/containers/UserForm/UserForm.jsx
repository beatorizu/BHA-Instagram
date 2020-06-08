import React, { useState } from 'react';

import ApiUrl from '../../setupApi'

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [wasCreated, toggleCreated] = useState(false)

  const handleOnChange = event => stateFunction => {
    const { value } = event.target;
    stateFunction(value)
  }

  const handleSubmit = async () => {
    const data = JSON.stringify({ name, avatar, username, email });
    const { ok, status } = await fetch(`${ApiUrl}/users`, { method: 'POST', body: data });
    if (ok && status === 201) {
      toggleCreated(true);
    }
  }

  return (
    <React.Fragment>
      {wasCreated && <SuccessMessage />}
      <section className="profile" data-testid="user-profile">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb--newstory">
                <div className="user__thumb">
                  <img src={avatar} alt="" />
                </div>
              </div>
              <p className="user__name">{name}<span>@{username}</span></p>
            </div>
          </div>
        </div>
      </section>
      <section className="post__form" data-testid="user-form">
        <div className="post__form__wrapper">
          <label>Nome</label>
          <input placeholder="Ochako Uraraka" type="text" onChange={(event) => handleOnChange(event)(setName)} />
          <label>Usuário</label>
          <input placeholder="ochakouraraka" type="text" onChange={(event) => handleOnChange(event)(setUsername)} />
          <label>Email</label>
          <input placeholder="ochako.uraraka@ua.jp" type="email" onChange={(event) => handleOnChange(event)(setEmail)} />
          <label>URL da imagem de perfil(use a URL da imagem do LinkedIn)</label>
          <input placeholder="http://..." type="text" onChange={(event) => handleOnChange(event)(setAvatar)} />
          <button onClick={handleSubmit}>Cadastrar</button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserForm;
