import React from 'react';
import { useNavigate } from "react-router-dom";

import { Box, Button, TextField, Typography } from '@mui/material';
import { style } from './style.js';


function Login() {
  
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/student-menu');
  }
  
  return (
    <>
      <Box sx={style().page}>
        <Box sx={style().loginBox}>
          <Typography sx={style().titulo}>Login</Typography>
          <TextField sx={style().input} placeholder='usuário' />
          <TextField sx={style().input} type="password" placeholder='senha' />
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