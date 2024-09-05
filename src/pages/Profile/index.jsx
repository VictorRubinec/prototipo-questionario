import React from 'react';
import { style } from './style.js';

import { Box, Typography, Divider, Avatar, Button, TextField } from '@mui/material';

import Estructure from '../../components/Global/Estructure/index.jsx';

function Profile() {

  return (
    <>
      <Estructure userPermitions={"aluno"}>
        <Box sx={style().box}>
          <Typography variant="h4" sx={style().title}>
            Perfil
          </Typography>
          <Divider sx={style().divider} />
          <Box sx={style().profileBox}>
            <Box sx={style().profileInfo}>
              <Avatar sx={style().avatar} />
              <Box sx={style().info}>
                <Typography variant="h5" sx={style().profileSubtitle}>
                  Nome: Aluno
                </Typography>
                <Typography variant="h5" sx={style().profileSubtitle}>
                  RA: 123456
                </Typography>
                <Typography variant="h5" sx={style().profileSubtitle}>
                  Escola: EMEF Prof. João
                </Typography>
              </Box>
            </Box>
            <Box sx={style().user}>
              <Box sx={style().userHeader}>
                <Typography variant="h5" sx={style().userTitle}>
                  Informações do usuário
                </Typography>
                <Button sx={style().button}>
                  Editar
                </Button>
              </Box>
              <Divider sx={style().divider} />
              <Box sx={style().userInfo}>
                <Box sx={style().userComponent}>
                  <Typography variant="h5" sx={style().userSubtitle}>
                    Email:
                  </Typography>
                  <TextField sx={style().input} value='email@gmail.com' disabled />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Estructure>
    </>
  );
}

export default Profile;