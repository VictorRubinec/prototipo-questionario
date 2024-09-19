import React from 'react';
import { style } from './style.js';
import { Box, Button, Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Estructure from '../../components/Global/Estructure/index.jsx';

function Grades() {

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
                  <TableCell sx={style().tableHeadCell}>Data</TableCell>
                  <TableCell sx={style().tableHeadActionCell}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={style().tableRow}>
                  <TableCell sx={style().tableBodyCell}>Matemática</TableCell>
                  <TableCell sx={style().tableBodyCell}>8.5</TableCell>
                  <TableCell sx={style().tableBodyCell}>25/02/2024</TableCell>
                  <TableCell sx={style().actionCell}>
                    <Button variant="contained" color="primary" sx={style().button}>Revisar</Button>
                    <Button variant="contained" color="primary" sx={style().button}>Detalhes</Button>
                  </TableCell>
                </TableRow>
                <TableRow sx={style().tableRow}>
                  <TableCell sx={style().tableBodyCell}>Português</TableCell>
                  <TableCell sx={style().tableBodyCell}>7.0</TableCell>
                  <TableCell sx={style().tableBodyCell}>26/02/2024</TableCell>
                  <TableCell sx={style().actionCell}>
                    <Button variant="contained" color="primary" sx={style().button}>Revisar</Button>
                    <Button variant="contained" color="primary" sx={style().button}>Detalhes</Button>
                  </TableCell>
                </TableRow>
                <TableRow sx={style().tableRow}>
                  <TableCell sx={style().tableBodyCell}>Química</TableCell>
                  <TableCell sx={style().tableBodyCell}>9.5</TableCell>
                  <TableCell sx={style().tableBodyCell}>27/02/2024</TableCell>
                  <TableCell sx={style().actionCell}>
                    <Button variant="contained" color="primary" sx={style().button}>Revisar</Button>
                    <Button variant="contained" color="primary" sx={style().button}>Detalhes</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Estructure>
    </>
  );
}

export default Grades;


