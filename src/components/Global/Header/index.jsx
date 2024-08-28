import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { style } from './style.js';

function Header() {
  return (
    <>
        <Box sx={style().header}>
          <Typography sx={style().titulo}>Menu do Aluno</Typography>
          <Avatar sx={style().avatar} />
        </Box>
    </>
  );
}

export default Header;