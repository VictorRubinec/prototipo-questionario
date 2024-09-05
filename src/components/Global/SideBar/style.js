import { margin } from "@mui/system";

const Style = () => {
    return {
        sideBarOpen: {
            width: '250px',
            height: '100%',
            background: 'linear-gradient(180deg, #1a1a1a, #333)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'fixed',
            zIndex: 1000,
            transition: 'width 0.5s ease, background 0.5s ease, height 0.5s ease',
        },

        sideBarClosed: {
            width: '60px',
            height: '100%',
            background: 'linear-gradient(180deg, #333, #1a1a1a)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'fixed',
            zIndex: 1000,
            transition: 'width 0.5s ease, background 0.5s ease, height 0.5s ease',
        },

        sideBarHeader: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexGrow: 1,
        },

        userInformation: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px 0',
            borderBottom: '1px solid #fff',
            width: '90%',
            margin: '10px 0',
            opacity: 1,
            transition: 'opacity 0.5s ease',
        },

        userInformationClosed: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px 0',
            width: '90%',
            margin: '10px 0',
            opacity: 0,
            height: 0,
            transition: 'opacity 0.5s ease',
        },

        sideBarIcon: {
            width: '100%',
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
        },

        sideBarButton: {
            width: '10%',
            color: '#fff',
            height: '50px',
            fontSize: '20px',
            padding: '10px 0',
            textAlign: 'center',
            textTransform: 'none',
            '&:hover': {
                backgroundColor: 'none'
            }
        },

        icon: {
            color: '#fff',
            fontSize: '30px',
            margin: '0 5px',
        },

        avatar: {
            width: '100px',
            height: '100px',
            margin: '10px 0',
        },

        nome: {
            color: '#fff',
            fontSize: '20px'
        },

        menuButton: {
            width: '100%',
            flexGrow: 1
        },

        button: {
            width: '100%',
            color: '#fff',
            height: '50px',
            fontSize: '16px',
            padding: '10px 0',
            textAlign: 'center',
            textTransform: 'none',
            '&:hover': {
                backgroundColor: '#555'
            }
        },

        buttonSair: {
            width: '100%',
            color: '#fff',
            height: '60px',
            fontSize: '16px',
            padding: '10px 0',
            textAlign: 'right',
            display: 'flex',
            textTransform: 'none',
            paddingRight: '10px',
            justifyContent: 'flex-end',
            '&:hover': {
                backgroundColor: '#555'
            },
            alignSelf: 'flex-end',
        }
    };
}

export const style = () => Style();
