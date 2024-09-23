import React from 'react';
import { Box, Typography, Avatar, Button, ButtonGroup } from '@mui/material';
import { style } from './style.js';

import Icon from '../../Icon/index.jsx';

function SideBarLoading(props) {
  const [open, setOpen] = React.useState(false);

  const { side, setSide } = props.sideState;

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
    
  }

  const handleMenu = (path) => {
    
  }

  const userPermissions = sessionStorage.getItem('permissions');
  const userName = JSON.parse(sessionStorage.getItem('user')).nome;

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
            <Typography sx={style().nome}>{userName}</Typography>
          </Box>
          {open ? (
            <ButtonGroup orientation="vertical" variant="text" sx={style().menuButton}>
              {userPermissions === 'student' && (
                <>
                  <Button sx={style().button} onClick={() => handleMenu('/')}><Icon name="LibraryBooksIcon" props={iconProps} /> Provas</Button>
                  <Button sx={style().button} onClick={() => handleMenu('/grades')}><Icon name="ManageAccountsIcon" props={iconProps} /> Minhas Notas</Button>
                  <Button sx={style().button} onClick={() => handleMenu('/profile')}><Icon name="ManageAccountsIcon" props={iconProps} /> Perfil</Button>
                </>
              )}
              {userPermissions === 'admin' && (
                <>
                  <Button sx={style().button} onClick={() => handleMenu('/admin/dashboard')}><Icon name="DashboardIcon" props={iconProps} /> Dashboard</Button>
                  <Button sx={style().button} onClick={() => handleMenu('/admin/users')}><Icon name="GroupIcon" props={iconProps} /> Gestão de Usuários</Button>
                  <Button sx={style().button} onClick={() => handleMenu('/admin/schools')}><Icon name="SchoolIcon" props={iconProps} /> Gestão de Escolas</Button>
                  <Button sx={style().button} onClick={() => handleMenu('/profile')}><Icon name="ManageAccountsIcon" props={iconProps} /> Perfil</Button>
                </>
              )}
              {userPermissions === 'school' && (
                <>
                  <Button sx={style().button} onClick={() => handleMenu('/school/dashboard')}><Icon name="DashboardIcon" props={iconProps} /> Dashboard</Button>
                  <Button sx={style().button} onClick={() => handleMenu('/school/students')}><Icon name="QueueIcon" props={iconProps} /> Gestão de Alunos</Button>
                  <Button sx={style().button} onClick={() => handleMenu('/profile')}><Icon name="ManageAccountsIcon" props={iconProps} /> Perfil</Button>

                </>
              )}
            </ButtonGroup>
          ) : (
            <ButtonGroup orientation="vertical" variant="text" sx={style().menuButton}>
              {userPermissions === 'student' && (
                <>
                  <Button sx={style().button} onClick={() => handleMenu('/')}><Icon name="LibraryBooksIcon" props={iconProps} /></Button>
                  <Button sx={style().button} onClick={() => handleMenu('/grades')}><Icon name="ClassIcon" props={iconProps} /></Button>
                  <Button sx={style().button} onClick={() => handleMenu('/profile')}><Icon name="ManageAccountsIcon" props={iconProps} /></Button>
                </>
              )}
              {userPermissions === 'admin' && (
                <>
                  <Button sx={style().button} onClick={() => handleMenu('/admin/dashboard')}><Icon name="DashboardIcon" props={iconProps} /></Button>
                  <Button sx={style().button} onClick={() => handleMenu('/admin/users')}><Icon name="GroupIcon" props={iconProps} /></Button>
                  <Button sx={style().button} onClick={() => handleMenu('/admin/schools')}><Icon name="SchoolIcon" props={iconProps} /></Button>
                  <Button sx={style().button} onClick={() => handleMenu('/profile')}><Icon name="ManageAccountsIcon" props={iconProps} /></Button>
                </>
              )}
              {userPermissions === 'school' && (
                <>
                  <Button sx={style().button} onClick={() => handleMenu('/school/dashboard')}><Icon name="DashboardIcon" props={iconProps} /></Button>
                  <Button sx={style().button} onClick={() => handleMenu('/school/students')}><Icon name="QueueIcon" props={iconProps} /></Button>
                  <Button sx={style().button} onClick={() => handleMenu('/profile')}><Icon name="ManageAccountsIcon" props={iconProps} /></Button>
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

export default SideBarLoading;
