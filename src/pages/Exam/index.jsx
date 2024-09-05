import React from 'react';
import { style } from './style.js';

import { Box, Button, Typography } from '@mui/material';

import Estructure from '../../components/Global/Estructure/index.jsx';

function Exam() {
  return (
    <Estructure userPermitions={"student"}>
      <Box sx={style().examBody}>
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
    </Estructure>
  );
}

export default Exam;
