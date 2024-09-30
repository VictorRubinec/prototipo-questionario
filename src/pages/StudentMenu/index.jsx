import React from 'react';

import { Box, Typography, Divider } from '@mui/material';
import { style } from './style.js';

import Estructure from '../../components/Global/Estructure'; // Importando o template
import BoxProva from '../../components/Student/BoxProva/index.jsx';

import supabase from '../../config/client.js';

function StudentMenu() {
  const [questionarios, setQuestionarios] = React.useState([]);

  try {
    if (!sessionStorage.getItem('user')) {
      window.location.href = '/login';
    }
  } catch (error) {
    console.log(error);
  }
  React.useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('v_questionarios_alunos')
        .select('*')
        .eq('id_aluno', JSON.parse(sessionStorage.getItem('user')).id);

      if (error) {
        console.log(error);
        return;
      }

      setQuestionarios(data);
    };

    fetchData();
  }, []);

  const userPermissionsInfo = sessionStorage.getItem('permissions');

  return (
    <Estructure userPermissionsInfo={userPermissionsInfo}>
      <Typography sx={style().header}>Minhas Provas:</Typography>
      <Divider orientation="horizontal" />
      <Box sx={style().body}>
        {questionarios.map((questionario) => (
          <BoxProva key={questionario.id_questionario} examInfo={questionario} />
        ))}
      </Box>
    </Estructure>
  );
}

export default StudentMenu;
