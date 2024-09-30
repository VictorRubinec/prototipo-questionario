import React from 'react';
import { useNavigate } from "react-router-dom";

import { Button, TextField, Typography } from '@mui/material';
import { style } from '../style.js';

import supabase from '../../../../config/client.js';

function LoginStudent() {

  if (sessionStorage.getItem('user')) {
    const permissions = sessionStorage.getItem('permissions');
    if (permissions === 'aluno') {
      navigate('/');
    }
  }

  const navigate = useNavigate();

  const handleLogin = async () => {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const { data, error } = await supabase
      .from('v_login_aluno')
      .select('id_aluno, nome_aluno')
      .eq('ra_aluno', username)
      .eq('senha_aluno', password);

    if (error) {
      console.log(error);
      return;
    } else if (data.length === 0) {
      alert('Usuário ou senha incorretos');
      return;
    }

    sessionStorage.clear();

    sessionStorage.setItem('user', JSON.stringify(
      {
        id: data[0].id_aluno,
        nome: data[0].nome_aluno,
      }
    ));
    sessionStorage.setItem('permissions', 'student');

    console.log(sessionStorage.getItem('user'));

    navigate('/');
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter' && document.activeElement.tagName === 'INPUT') {
      handleLogin();
    }
  }

  document.addEventListener('keydown', handleEnter);

  return (
    <>
      <Typography sx={style().titulo}>Login</Typography>
      <TextField sx={style().input} label='RA' id="username" color='black'/>
      <TextField sx={style().input} type="password" label='senha' id="password"  color='black'/>
      <Button
        sx={style().button}
        onClick={handleLogin}>
        Entrar
      </Button>
    </>
  );
}

export default LoginStudent;