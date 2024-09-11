import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { style } from './style.js';

import Estructure from '../../components/Global/Estructure'; // Importando o template
import BoxProva from '../../components/Student/BoxProva/index.jsx';

import supabase from '../../config/client.js';

import useVerifyUserPermissions from '../../utils/useVerifyUserPermissions/index.jsx';

function StudentMenu() {
  const hasPermission = useVerifyUserPermissions('student');

  const [questionarios, setQuestionarios] = React.useState([]);

  React.useEffect(() => {
    if (hasPermission) {
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
    }
  }, [hasPermission]);

  if (!hasPermission) {
    return <></>;
  }

  return (
    <Estructure>
      <Typography sx={style().menuTitulo}>Minhas Provas:</Typography>
      <Divider orientation="horizontal" />
      <Box>
        {questionarios.map((questionario) => (
          <BoxProva key={questionario.id_questionario} examInfo={questionario} />
        ))}
      </Box>
    </Estructure>
  );
}

export default StudentMenu;
