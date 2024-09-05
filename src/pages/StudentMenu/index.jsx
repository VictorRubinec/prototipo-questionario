import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { style } from './style.js';

import Estructure from '../../components/Global/Estructure'; // Importando o template
import BoxProva from '../../components/StudentMenu/BoxProva';

function StudentMenu() {
  return (
    <Estructure userPermitions={"aluno"}>
      <Typography sx={style().menuTitulo}>Minhas Provas:</Typography>
      <Divider orientation="horizontal" />
      <Box>
        <BoxProva />
      </Box>
    </Estructure>
  );
}

export default StudentMenu;
