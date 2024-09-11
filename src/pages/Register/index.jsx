import React, { useEffect } from 'react';
import { style } from './style.js';

import { Box, Button, Typography } from '@mui/material';

import Estructure from '../../components/Global/Estructure/index.jsx';

import supabase from '../../config/client.js';

function Register() {

  // const [users, setUsers] = React.useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data, error } = await supabase
  //       .from('usuario')
  //       .select('id, nome, email');

  //     if (error) {
  //       console.log(error);
  //       return;
  //     }

  //     setUsers(data);

  //     console.log(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Estructure userPermissions={"school"}>
        {/* {users.map((user) => (
          <Box sx={style().user} key={user.id}>
            <Box sx={style().userHeader}>
              <Typography sx={style().profileText}>{user.name}</Typography>
              <Button sx={style().button}>Editar</Button>
            </Box>
            <Box sx={style().userInfo}>
              <img src="https://via.placeholder.com/150" alt="Avatar" sx={style().avatar} />
              <Typography sx={style().userSubtitle}>{user.email}</Typography>
            </Box>
          </Box>
        ))} */}
      </Estructure>
    </>
  );
}

export default Register;