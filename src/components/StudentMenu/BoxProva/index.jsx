import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import { style } from './style.js';
import { useNavigate } from 'react-router-dom';

function BoxProva() {

  const navigate = useNavigate();

  const handleExam = () => {
    navigate('/exam');
  }

  return (
    <>
      <Box 
        sx={style().boxProva}
        onClick={handleExam}>
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