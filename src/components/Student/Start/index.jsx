import React from 'react';
import { style } from './style.js';
import { Box, Button, Typography, Divider } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import supabase from '../../../config/client.js';

function Start() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [exam, setExam] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('v_info_questionario')
        .select('*')
        .eq('id_questionario', id);
      if (error) {
        console.log(error);
      }
      setExam(data[0]);
    }
    fetchData();
  }
    , [id]);

  const handleStart = () => {
    navigate(`/student/exam/${id}/questions`);
  }

  return (

    //     data_fim_questionario
    // : 
    // "2024-09-11T01:02:31.576495"
    // data_inicio_questionario
    // : 
    // "2024-09-10T01:02:31.576495"
    // descricao_questionario
    // : 
    // "Descrição do Questionário 1"
    // id_questionario
    // : 
    // 1
    // tipo_questionario
    // : 
    // "Tipo 1"
    // titulo_questionario
    // : 
    // "Questionário 1"

    <>
      {/* quero um header com o título e as informações abaixo em outra box */}
      <Typography sx={style().titulo}>{exam.titulo_questionario}</Typography>
      <Divider sx={style().divider} />
      <Box sx={style().boxProva}>
        <Box sx={style().infoBox}>
          <Typography sx={style().info}>{exam.tipo_questionario}</Typography>
          <Typography sx={style().info}>{exam.descricao_questionario}</Typography>
          <Typography sx={style().info}>Início: {new Date(exam.data_inicio_questionario).toLocaleString()}</Typography>
          <Typography sx={style().info}>Fim: {new Date(exam.data_fim_questionario).toLocaleString()}</Typography>
        </Box>
        <Box sx={style().dataBox}>
          <Typography sx={style().infoBold}>Início: </Typography>
          <Typography sx={style().info}>{new Date(exam.data_inicio_questionario).toLocaleString()}</Typography>
          <Divider orientation='vertical' />
          <Typography sx={style().infoBold}>Fim: </Typography>
          <Typography sx={style().info}>{new Date(exam.data_fim_questionario).toLocaleString()}</Typography>
        </Box>
        <Box sx={style().boxButton}>
          <Button sx={style().botao} onClick={handleStart}>Iniciar</Button>
        </Box>
      </Box>
    </>
  );
}

export default Start;