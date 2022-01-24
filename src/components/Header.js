import React from 'react';
import { useSelector } from 'react-redux';

import './Header.css';

export default function Header() {
  const email = useSelector((state) => state.login.email);

  return (
    <header className="conteiner-header">
      <h1>Personal Budget</h1>
      <p>{email}</p>
    </header>
  );
}
