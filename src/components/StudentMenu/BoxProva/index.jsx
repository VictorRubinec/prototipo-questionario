import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import { style } from './style.js';

function BoxProva() {
  return (
    <>
      <Box sx={style().boxProva}>
        <Typography sx={style().titulo}>Prova 1</Typography>
        <Divider orientation="horizontal" />
        <Box sx={style().boxButton}>
          <Button sx={style().botao}>Iniciar</Button>
        </Box>
      </Box>
    </>
  );
}

export default BoxProva;