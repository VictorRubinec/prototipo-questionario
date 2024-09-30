import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import { style } from './style.js';
import { useNavigate } from 'react-router-dom';

function BoxProva({ examInfo }) {

  const navigate = useNavigate();

  const handleExam = (id) => {
    navigate('/exam/' + id + '/start');
  }

  examInfo.data_inicio_questionario = new Date(examInfo.data_inicio_questionario).toLocaleString();
  examInfo.data_fim_questionario = new Date(examInfo.data_fim_questionario).toLocaleString();

  return (
    <>
      <Box sx={style().boxProva}>
        <Typography sx={style().titulo}>{examInfo.titulo_questionario}</Typography>
        <Divider sx={style().divider} />
        <Box sx={style().boxBody}>
          <Box sx={style().boxInfo}>
            <Typography sx={style().text}>Turma: {examInfo.nome_turma}</Typography>
            <Typography sx={style().text}>Tipo: {examInfo.tipo_questionario}</Typography>
            <Box sx={style().boxData}>
              <Typography sx={style().data}>Início: {examInfo.data_inicio_questionario}</Typography>
              <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
              <Typography sx={style().data}>Fim: {examInfo.data_fim_questionario}</Typography>
            </Box>
          </Box>
          <Box sx={style().boxButton}>
            <Button sx={style().botao} onClick={() => handleExam(examInfo.id_questionario)}>Iniciar</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BoxProva;