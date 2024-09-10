import React from "react";

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

function Icon({ name, props }) {

    switch (name) {
        case 'MenuIcon':
            return <MenuIcon sx={props} />;
        case 'ArrowBackIosIcon':
            return <ArrowBackIosIcon sx={props} />;
        case 'LogoutIcon':
            return <LogoutIcon sx={props} />;
        case 'LibraryBooksIcon':
            return <LibraryBooksIcon sx={props} />;
        case 'ClassIcon':
            return <ClassIcon sx={props} />;
        case 'ManageAccountsIcon':
            return <ManageAccountsIcon sx={props} />;
        case 'DashboardIcon':
            return <DashboardIcon sx={props} />;
        case 'GroupIcon':
            return <GroupIcon sx={props} />;
        case 'QueueIcon':
            return <QueueIcon sx={props} />;
        case 'SchoolIcon':
            return <SchoolIcon sx={props} />;
        default:
            return <></>;
    }
}

export default Icon;