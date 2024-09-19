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
        <Typography sx={style().turma}>{examInfo.nome_turma}</Typography>
        <Typography sx={style().tipo}>{examInfo.tipo_questionario}</Typography>
        <Typography sx={style().descricao}>{examInfo.descricao_questionario}</Typography>
        <Typography sx={style().data}>Início: {examInfo.data_inicio_questionario}</Typography>
        <Typography sx={style().data}>Fim: {examInfo.data_fim_questionario}</Typography>
        <Box sx={style().boxButton}>
          <Button sx={style().botao} onClick={() => handleExam(examInfo.id_questionario)}>Iniciar</Button>
        </Box>
      </Box>
    </>
  );
}

export default BoxProva;