import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { style } from '../style.js';

import { useNavigate } from 'react-router-dom';

function LoginAdmin() {

  if (sessionStorage.getItem('user')) {
    const permissions = sessionStorage.getItem('permissions');
    if (permissions === 'admin') {
      navigate('/admin/dashboard');
    }
  }

  const navigate = useNavigate();

  const handleLogin = async () => {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const { data, error } = await supabase
      .from('v_login_administrador')
      .select('id_administrador, nome_administrador')
      .eq('email_administrador', username)
      .eq('senha_administrator', password)

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
        id: data[0].id_administrador,
        nome: data[0].nome_administrador,
      }
    ));
    sessionStorage.setItem('permissions', 'admin');

    navigate('/admin/dashboard');
  }

  return (
    <>
      <Typography sx={style().titulo}>Login Adiministrativo</Typography>
      <TextField sx={style().input} label='usuário' id="username" color='black' />
      <TextField sx={style().input} type="password" label='senha' id="password" color='black' />
      <Button sx={style().button} onClick={handleLogin}>
        Entrar
      </Button>
    </>
  );
}

export default LoginAdmin;