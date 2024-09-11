import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { style } from './style.js';

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
      .from('professores')
      .select('id, nome, email')
      .eq('email', username)
      .eq('senha', password);

    if (error) {
      console.log(error);
      return;
    } else if (data.length === 0) {
      alert('Usuário ou senha incorretos');
      return;
    }

    sessionStorage.setItem('user', JSON.stringify(data[0]));
    sessionStorage.setItem('permissions', 'school');

    navigate('/school/dashboard');
  }

  return (
    <>
      <Box sx={style().page}>
        <Box sx={style().loginBox}>
          <Typography sx={style().titulo}>School Login</Typography>
          <TextField sx={style().input} placeholder='usuário' />
          <TextField sx={style().input} type="password" placeholder='senha' />
          <Button sx={style().button} onClick={handleLogin}>
            Entrar
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default LoginSchool;