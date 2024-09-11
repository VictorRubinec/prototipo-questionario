import React, { useState } from 'react';
import { Box, Typography, Divider, Avatar, TextField, Button, Grid } from '@mui/material';
import { style } from './style.js';
import supabase from '../../../../config/client.js';

function ProfileStudent() {
  const [isEditable, setIsEditable] = useState(false);

  const [studentInfo, setStudentInfo] = useState({
    nome: '',
    escola: '',
    turma: '',
    ra: '',
    email: '',
    idade: '',
    sexo: '',
    etnia: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: '',
    telefone: '',
    celular: '',
    dataNascimento: '',
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const user = JSON.parse(sessionStorage.getItem('user'));

      const { data, error } = await supabase
        .from('alunos')
        .select('*')
        .eq('id', user.id);

      if (error) {
        console.log(error);
        return;
      }

      if (data[0].sexo === 'M') {
        data[0].sexo = 'Masculino';
      } else {
        data[0].sexo = 'Feminino';
      }

      setStudentInfo(data[0]);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setStudentInfo({
      ...studentInfo,
      [e.target.name]: e.target.value,
    });
    React.useEffect(() => {
      const fetchData = async () => {
        const user = JSON.parse(sessionStorage.getItem('user'));

        const { data, error } = await supabase
          .from('alunos')
          .select('*')
          .eq('id', user.id);

        if (error) {
          console.log(error);
          return;
        }

        setStudentInfo(data[0]);
      };

      fetchData();
    }, [studentInfo]);
  };



  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <>
      <Box sx={style().header}>
        <Avatar sx={style().avatar} />
        <Box sx={style().headerInfo}>
          <Typography variant="h6" sx={style().nome}>{studentInfo.nome}</Typography>
          <Typography sx={style().info}>RA: {studentInfo.ra}</Typography>
          <Typography sx={style().info}>Escola: {studentInfo.escola}</Typography>
          <Typography sx={style().info}>Turma: {studentInfo.turma}</Typography>
        </Box>
      </Box>

      <Divider orientation="horizontal" sx={style().divider} />

      <Box sx={style().body}>
        <Box sx={style().infoHeader}>
          <Typography sx={style().menuTitulo}>Informações Pessoais:</Typography>
          <Button variant="contained" onClick={toggleEdit} sx={style().editButton}>
            {isEditable ? 'Salvar' : 'Editar'}
          </Button>
        </Box>

        {/* Primeira linha: Idade, Sexo, Data de Nascimento, Etnia */}
        <Grid container spacing={2} sx={{ marginBottom: 2 }}>
          <Grid item xs={3}>
            <TextField
              label="Idade"
              value={studentInfo.idade}
              name="idade"
              onChange={handleChange}
              disabled={!isEditable}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Sexo"
              value={studentInfo.sexo}
              name="sexo"
              onChange={handleChange}
              disabled={!isEditable}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Data de Nascimento"
              value={studentInfo.dataNascimento}
              name="dataNascimento"
              onChange={handleChange}
              disabled={!isEditable}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Etnia"
              value={studentInfo.etnia}
              name="etnia"
              onChange={handleChange}
              disabled={!isEditable}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Segunda linha: Email, Celular, Telefone */}
        <Grid container spacing={2} sx={{ marginBottom: 2 }}>
          <Grid item xs={6}>
            <TextField
              label="Email"
              value={studentInfo.email}
              name="email"
              onChange={handleChange}
              disabled={!isEditable}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Celular"
              value={studentInfo.celular}
              name="celular"
              onChange={handleChange}
              disabled={!isEditable}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Telefone"
              value={studentInfo.telefone}
              name="telefone"
              onChange={handleChange}
              disabled={!isEditable}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Terceira e quarta linha: Endereço, Cidade, Estado, CEP */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Endereço"
              value={studentInfo.endereco}
              name="endereco"
              onChange={handleChange}
              disabled={!isEditable}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Cidade"
              value={studentInfo.cidade}
              name="cidade"
              onChange={handleChange}
              disabled={!isEditable}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Estado"
              value={studentInfo.estado}
              name="estado"
              onChange={handleChange}
              disabled={!isEditable}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="CEP"
              value={studentInfo.cep}
              name="cep"
              onChange={handleChange}
              disabled={!isEditable}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ProfileStudent;
