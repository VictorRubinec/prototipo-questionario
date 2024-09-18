import React from 'react';
import { style } from './style.js';

import { Box, Button, ButtonGroup, Checkbox, RadioGroupm, Select, Switch, TextField, Typography } from '@mui/material';

import supabase from '../../../config/client.js';

function Question({ questionProps }) {

  // questionProps.id_pergunta
  // questionProps.id_questionario
  // questionProps.pergunta
  // questionProps.tipo

  const [alternatives, setAlternatives] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('v_alternativas_pergunta')
        .select('*')
        .eq('id_pergunta', questionProps.id_pergunta);
      if (error) {
        console.log(error);
      }
      setAlternatives(data);
    }
    fetchData();
  }
    , []);

  console.log(alternatives);

  return (
    <>
      <Box sx={style().question}>
        <Typography variant="h6">{questionProps.pergunta}</Typography>
      </Box>
    </>
  );
}

export default Question;