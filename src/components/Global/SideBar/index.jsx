import React from 'react';
import { Box, Typography, Avatar, Button, ButtonGroup } from '@mui/material';
import { style } from './style.js';
import { useNavigate } from 'react-router-dom';

// ícones
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LogoutIcon from '@mui/icons-material/Logout';

// aluno
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ClassIcon from '@mui/icons-material/Class';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

// school e admin
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';

// school
import QueueIcon from '@mui/icons-material/Queue';

// admin
import SchoolIcon from '@mui/icons-material/School';

function SideBar(props) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  
  const { side, setSide } = props.sideState;
  const { userPermitions } = props;

  const handleOpen = () => {
    setOpen(!open);
    setSide(!side);
  };

  const handleExams = () => {
    navigate('/student-menu');
  };

  return (
    <>
      <Box sx={open ? style().sideBarOpen : style().sideBarClosed}>
        <Box sx={style().sideBarHeader}>
          <Box sx={style().sideBarIcon}>
            <Button onClick={handleOpen} sx={style().sideBarButton}>
              {open ? <ArrowBackIosIcon sx={style().icon} /> : <MenuIcon sx={style().icon} />}
            </Button>
          </Box>
          <Box sx={open ? style().userInformation : style().userInformationClosed}>
            <Avatar sx={style().avatar} />
            <Typography sx={style().nome}>Nome do Usuário</Typography>
          </Box>
          {open ? (
            <ButtonGroup orientation="vertical" variant="text" sx={style().menuButton}>
              {userPermitions === 'aluno' && (
                <>
                  <Button sx={style().button} onClick={handleExams}><LibraryBooksIcon sx={style().icon} /> Meus Exames</Button>
                  <Button sx={style().button}><ClassIcon sx={style().icon} /> Notas</Button>
                  <Button sx={style().button}><ManageAccountsIcon sx={style().icon} /> Perfil</Button>
                </>
              )}
              {userPermitions === 'admin' && (
                <>
                  <Button sx={style().button}><DashboardIcon sx={style().icon} /> Dashboard</Button>
                  <Button sx={style().button}><GroupIcon sx={style().icon} /> Gerenciar Usuários</Button>
                  <Button sx={style().button}><SchoolIcon sx={style().icon} /> Gestão de Escolas</Button>
                  <Button sx={style().button}><ManageAccountsIcon sx={style().icon} /> Perfil</Button>
                </>
              )}
              {userPermitions === 'school' && (
                <>
                  <Button sx={style().button}><DashboardIcon sx={style().icon} /> Dashboard</Button>
                  <Button sx={style().button}><QueueIcon sx={style().icon} /> Gestão de Alunos</Button>
                  <Button sx={style().button}><ManageAccountsIcon sx={style().icon} /> Perfil</Button>
                </>
              )}
            </ButtonGroup>
          ) : (
            <ButtonGroup orientation="vertical" variant="text" sx={style().menuButton}>
              {userPermitions === 'aluno' && (
                <>
                  <Button sx={style().button} onClick={handleExams}><LibraryBooksIcon sx={style().icon} /></Button>
                  <Button sx={style().button}><ClassIcon sx={style().icon} /></Button>
                  <Button sx={style().button}><ManageAccountsIcon sx={style().icon} /></Button>
                </>
              )}
              {userPermitions === 'admin' && (
                <>
                  <Button sx={style().button}><DashboardIcon sx={style().icon} /></Button>
                  <Button sx={style().button}><GroupIcon sx={style().icon} /></Button>
                  <Button sx={style().button}><SchoolIcon sx={style().icon} /></Button>
                  <Button sx={style().button}><ManageAccountsIcon sx={style().icon} /></Button>
                </>
              )}
              {userPermitions === 'school' && (
                <>
                  <Button sx={style().button}><QueueIcon sx={style().icon} /></Button>
                  <Button sx={style().button}><DashboardIcon sx={style().icon} /></Button>
                  <Button sx={style().button}><ManageAccountsIcon sx={style().icon} /></Button>
                </>
              )}
            </ButtonGroup>
          )}
          {open ? (
            <Button sx={style().buttonSair}><LogoutIcon sx={style().icon} /> Sair</Button>
          ) : (
            <Button sx={style().buttonSair}><LogoutIcon sx={style().icon} /></Button>
          )}
        </Box>
      </Box>
    </>
  );
}

export default SideBar;
