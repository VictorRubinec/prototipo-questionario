import React from 'react';
import { style } from './style.js';
import { Box, Button, Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Estructure from '../../components/Global/Estructure/index.jsx';

import supabase from '../../config/client.js';

function Grades() {

  const [grades, setGrades] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('v_notas_aluno')
        .select('*')
        .eq('id_aluno', JSON.parse(sessionStorage.getItem('user')).id);

      if (error) {
        console.log(error);
        return;
      }

      setGrades(data);
    };

    fetchData();

  }, []);

  console.log(grades);

  const userPermissionsInfo = sessionStorage.getItem('permissions');

  return (
    <>
      <Estructure userPermissionsInfo={userPermissionsInfo}>
        <Box sx={style().box}>
          <Typography variant="h4" sx={style().title}>
            Notas
          </Typography>
          <Divider sx={style().divider} />
          <TableContainer component={Paper} sx={style().tableContainer}>
            <Table sx={style().table}>
              <TableHead>
                <TableRow>
                  <TableCell sx={style().tableHeadCell}>Matéria</TableCell>
                  <TableCell sx={style().tableHeadCell}>Nota</TableCell>
                  <TableCell sx={style().tableHeadFinalCell}>Data</TableCell>
                  <TableCell sx={style().tableHeadActionCell}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {grades.map((grade) => (
                  <TableRow key={grade.id_questionario} sx={style().tableRow}>
                    <TableCell sx={style().tableBodyCell}>{grade.questionario_titulo}</TableCell>
                    <TableCell sx={style().tableBodyCell}>{grade.nota_obtida.toFixed(2)}</TableCell>
                    <TableCell sx={style().tableBodyFinalCell}>{grade.data_realizacao.split('T')[0].split('-').reverse().join('/')}</TableCell>
                    <TableCell sx={style().tableBodyButton}>
                      <Button variant="contained" color="primary" sx={style().button}
                        onClick={() => window.location.href = `/exam/${grade.id_questionario}/result`}
                      >Revisar</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Estructure>
    </>
  );
}

export default Grades;


