import React from 'react';
import { style } from './style.js';

import { Box, Button, Typography } from '@mui/material';

import Header from '../../components/Global/Header/index.jsx';

function Exam() {
  return (
    <>
      <Header />
      <Box sx={style().page}>
        <Box sx={style().examBox}>
          <Typography sx={style().titulo}>Prova</Typography>
          <Box sx={style().texto}>
            <Typography>
              Você tem 60 minutos para responder 10 questões de múltipla escolha.
            </Typography>
            <Typography>
              Sair da prova ou fechar a aba finalizará a prova automaticamente.
            </Typography>
          </Box>
          <Button sx={style().button}>
            Iniciar Prova
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Exam;