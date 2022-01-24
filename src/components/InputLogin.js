import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getEmail } from '../actions';


export default function InputLogin() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');

  function renderPassword() {
    return (
      <label className="input-password">
        Senha
        <input minLength="6" required type="password" />
      </label>
    );
  }

  function renderEmail() {
    return (
      <label className="input-email">
        Email
        <input 
          required
          type="email"
          onChange={({ target }) => setEmail(target.value)}
        />
      </label>
    );
  }

  function handleClick(event) {
    event.preventDefault();
    dispatch(
      getEmail(email)
    );
    history.push('/wallet')
  }

  return (
    <div className="conteiner-login">
      <h1>Login</h1>
      <form onSubmit={handleClick}>
        {renderEmail()}
        {renderPassword()}
        <div className="btn-login">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}
