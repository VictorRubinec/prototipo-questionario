import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { style } from './style.js';

function Login() {
  return (
    <>
      <Box sx={style().page}>
        <Box sx={style().loginBox}>
          <Typography sx={style().titulo}>Login</Typography>
          <TextField sx={style().input} placeholder='usuário' />
          <TextField sx={style().input} type="password" placeholder='senha' />
          <Button sx={style().button}>
            Entrar
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Login;