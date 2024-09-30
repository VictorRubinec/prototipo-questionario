import React from 'react';
import { style } from './style.js';

import { Box, Divider } from '@mui/material';

import LoginStudent from '../../components/Global/Login/LoginStudent/index.jsx';
import LoginAdmin from '../../components/Global/Login/LoginAdmin/index.jsx';
import LoginSchool from '../../components/Global/Login/LoginSchool/index.jsx';

function Login() {

  const pathname = window.location.pathname;

  return (
    <>
      <Box sx={style().page}>
        <Box sx={style().loginBox}>
          <Box sx={style().loginHeader}>
            <Box sx={style().logo}></Box>
          </Box>
          <Box sx={style().loginBody}>
            <Divider sx={style().divider} />
            {pathname === '/login' && <LoginStudent />}
            {pathname === '/admin' && <LoginAdmin />}
            {pathname === '/school' && <LoginSchool />}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;