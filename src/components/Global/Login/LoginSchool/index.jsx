import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { style } from '../style.js';

import { useNavigate } from 'react-router-dom';

function LoginSchool() {

  if (sessionStorage.getItem('user')) {
    const permissions = sessionStorage.getItem('permissions');
    if (permissions === 'school') {
      navigate('/school/dashboard');
    }
  }

  const navigate = useNavigate();

  const handleLogin = async () => {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const { data, error } = await supabase
      .from('v_login_professor')
      .select('id_professor, nome_professor')
      .eq('email_professor', username)
      .eq('senha_professor', password);

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
        id: data[0].id_professor,
        nome: data[0].nome_professor,
      }
    ));
    sessionStorage.setItem('permissions', 'school');

    navigate('/achool/dashboard');
  }

  return (
    <>
      <Typography sx={style().titulo}>Login Escolar</Typography>
      <TextField sx={style().input} label='usuário' id="username" color='black' />
      <TextField sx={style().input} type="password" label='senha' id="password" color='black' />
      <Button sx={style().button} onClick={handleLogin}>
        Entrar
      </Button>
    </>
  );
}

export default LoginSchool;