import React from 'react';
import { Box, Typography, Avatar, Button, ButtonGroup } from '@mui/material';
import { style } from './style.js';
import { useNavigate } from 'react-router-dom';

import Icon from '../Icon/index.jsx';

import supabase from '../../../config/client.js';

function SideBar(props) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  
  const { side, setSide } = props.sideState;
  
  const user = JSON.parse(sessionStorage.getItem('user'));
  const userPermitions = sessionStorage.getItem('permitions');

  const iconProps = {
    color: '#fff',
    fontSize: '28px',
    margin: '0 5px',
  };

  const handleSideBar = () => {
    setOpen(!open);
    setSide(!side);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
      return;
    }

    sessionStorage.removeItem('user');
    sessionStorage.removeItem('permitions');

    navigate('/');
  }

  const handleMenu = (path) => {
    navigate(path);
  }

  return (
    <>
      <Box sx={open ? style().sideBarOpen : style().sideBarClosed}>
        <Box sx={style().sideBarHeader}>
          <Box sx={style().sideBarIcon}>
            <Button onClick={handleSideBar} sx={style().sideBarButton}>
              {open ? <Icon name="ArrowBackIosIcon" props={iconProps} /> : <Icon name="MenuIcon" props={iconProps} />}
            </Button>
          </Box>
          <Box sx={open ? style().userInformation : style().userInformationClosed}>
            <Avatar sx={style().avatar} />
            <Typography sx={style().nome}>{user.nome}</Typography>
          </Box>
          {open ? (
            <ButtonGroup orientation="vertical" variant="text" sx={style().menuButton}>
              {userPermitions === 'aluno' && (
                <>
                  <Button sx={style().button} onClick={() => handleMenu('/student')}><Icon name="LibraryBooksIcon" props={iconProps} /> Provas</Button>
                  <Button sx={style().button} onClick={() => handleMenu('/student/grades')}><Icon name="ManageAccountsIcon" props={iconProps} /> Minhas Notas</Button>
                  <Button sx={style().button} onClick={() => handleMenu('/student/profile')}><Icon name="ManageAccountsIcon" props={iconProps} /> Perfil</Button>
                </>
              )}
              {userPermitions === 'admin' && (
                <>
                  <Button sx={style().button} onClick={() => handleMenu('/admin/dashboard')}><Icon name="DashboardIcon" props={iconProps} /> Dashboard</Button>
                  <Button sx={style().button} onClick={() => handleMenu('/admin/users')}><Icon name="GroupIcon" props={iconProps} /> Gestão de Usuários</Button>
                  <Button sx={style().button} onClick={() => handleMenu('/admin/schools')}><Icon name="SchoolIcon" props={iconProps} /> Gestão de Escolas</Button>
                  <Button sx={style().button} onClick={() => handleMenu('/admin/profile')}><Icon name="ManageAccountsIcon" props={iconProps} /> Perfil</Button>
                </>
              )}
              {userPermitions === 'school' && (
                <>
                  <Button sx={style().button} onClick={() => handleMenu('/school/dashboard')}><Icon name="DashboardIcon" props={iconProps} /> Dashboard</Button>
                  <Button sx={style().button} onClick={() => handleMenu('/school/students')}><Icon name="QueueIcon" props={iconProps} /> Gestão de Alunos</Button>
                  <Button sx={style().button} onClick={() => handleMenu('/school/profile')}><Icon name="ManageAccountsIcon" props={iconProps} /> Perfil</Button>

                </>
              )}
            </ButtonGroup>
          ) : (
            <ButtonGroup orientation="vertical" variant="text" sx={style().menuButton}>
              {userPermitions === 'aluno' && (
                <>
                  <Button sx={style().button} onClick={() => handleMenu('/student')}><Icon name="LibraryBooksIcon" props={iconProps} /></Button>
                  <Button sx={style().button} onClick={() => handleMenu('/student/grades')}><Icon name="ClassIcon" props={iconProps} /></Button>
                  <Button sx={style().button} onClick={() => handleMenu('/student/profile')}><Icon name="ManageAccountsIcon" props={iconProps} /></Button>
                </>
              )}
              {userPermitions === 'admin' && (
                <>
                  <Button sx={style().button} onClick={() => handleMenu('/admin/dashboard')}><Icon name="DashboardIcon" props={iconProps} /></Button>
                  <Button sx={style().button} onClick={() => handleMenu('/admin/users')}><Icon name="GroupIcon" props={iconProps} /></Button>
                  <Button sx={style().button} onClick={() => handleMenu('/admin/schools')}><Icon name="SchoolIcon" props={iconProps} /></Button>
                  <Button sx={style().button} onClick={() => handleMenu('/student/profile')}><Icon name="ManageAccountsIcon" props={iconProps} /></Button>
                </>
              )}
              {userPermitions === 'school' && (
                <>
                  <Button sx={style().button} onClick={() => handleMenu('/school/dashboard')}><Icon name="DashboardIcon" props={iconProps} /></Button>
                  <Button sx={style().button} onClick={() => handleMenu('/school/students')}><Icon name="QueueIcon" props={iconProps} /></Button>
                  <Button sx={style().button} onClick={() => handleMenu('/student/profile')}><Icon name="ManageAccountsIcon" props={iconProps} /></Button>
                </>
              )}
            </ButtonGroup>
          )}
          {open ? (
            <Button sx={style().buttonSair} onClick={handleLogout}><Icon name="LogoutIcon" props={iconProps} /></Button>
          ) : (
            <Button sx={style().buttonSair} onClick={handleLogout}><Icon name="LogoutIcon" props={iconProps} /></Button>
          )}
        </Box>
      </Box>
    </>
  );
}

export default SideBar;
