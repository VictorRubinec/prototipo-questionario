import React from 'react';
import { style } from './style.js';

function Questions({ user, permissions }) {
  return (
    <>
      <div style={style().container}>
        <h1>Questões</h1>
        {user && (
          <div>
            <p><strong>Usuário:</strong> {user.name}</p>
            <p><strong>Permissões:</strong> {permissions}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Questions;
