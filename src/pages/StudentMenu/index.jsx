import React from 'react';
import { Box, Button, Typography, Avatar, Divider } from '@mui/material';
import { style } from './style.js';

import Header from '../../components/Global/Header/index.jsx';
import BoxProva from '../../components/StudentMenu/BoxProva';

function StudentMenu() {
  return (
    <>
      <Box sx={style().page}>
        <Header />
        <Box sx={style().body}>
          <Typography sx={style().menuTitulo}>Minhas Provas:</Typography>
          <Divider orientation="horizontal" />
          <Box sx={style().body}>
            <BoxProva />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default StudentMenu;