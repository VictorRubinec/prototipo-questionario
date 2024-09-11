import React from 'react';
import { useNavigate } from "react-router-dom";

import { Box, Button, TextField, Typography } from '@mui/material';
import { style } from './style.js';

import supabase from '../../config/client.js';

function Login() {
  
  if (sessionStorage.getItem('user')) {
    const permissions = sessionStorage.getItem('permissions');
    if (permissions === 'student') {
      navigate('/student');
    } 
  }

  const navigate = useNavigate();

  const handleLogin = async () => {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const { data, error } = await supabase
      .from('alunos')
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
    sessionStorage.setItem('permissions', 'student');

    navigate('/student');
  }
  
  return (
    <>
      <Box sx={style().page}>
        <Box sx={style().loginBox}>
          <Typography sx={style().titulo}>Login</Typography>
          <TextField sx={style().input} placeholder='usuário' id="username" />
          <TextField sx={style().input} type="password" placeholder='senha' id="password" />
          <Button 
            sx={style().button}
            onClick={handleLogin}>
            Entrar
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Login;