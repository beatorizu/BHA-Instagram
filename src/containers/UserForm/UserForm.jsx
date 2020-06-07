import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  return (
    <React.Fragment>
      <section className="profile" data-testid="user-profile">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb--newstory">
                <div className="user__thumb">
                  <img src="" alt="" />
                </div>
              </div>
              <p className="user__name">blha<span>@blha</span></p>
            </div>
          </div>
        </div>
      </section>
      <section className="post__form" data-testid="user-form">
        <div className="post__form__wrapper">
          <label>Nome</label>
          <input placeholder="Ochako Uraraka" type="text"/>
          <label>Usuário</label>
          <input placeholder="ochakouraraka" type="text"/>
          <label>Email</label>
          <input placeholder="ochako.uraraka@ua.jp" type="text"/>
          <label>URL da imagem de perfil(use a URL da imagem do LinkedIn)</label>
          <input placeholder="http://..." type="text"/>
          <button>Cadastrar</button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserForm;
