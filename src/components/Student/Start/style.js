const Style = () => {
    return {
        headerBox: {
            display: 'flex',
            justifyContent: 'center',
            padding: '20px 0',
        },

        titulo: {
            fontSize: '24px',
            fontWeight: 'bold',
            '@media (min-width: 600px)': { // sm
                fontSize: '28px',
            },
            '@media (min-width: 900px)': { // md
                fontSize: '30px',
            },
            '@media (min-width: 1200px)': { // lg
                fontSize: '34px',
            },
        },

        divider: {
            margin: '10px 0px',
        },

        infoBody: {
            display: 'flex',
            flexDirection: 'column',
            padding: '0 10px',
            width: '100%',
        },

        infoBox: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        },

        infoBold: {
            fontSize: '16px',
            fontWeight: 'bold',
            '@media (min-width: 600px)': { // sm
                fontSize: '18px',
            },
            '@media (min-width: 900px)': { // md
                fontSize: '20px',
            },
        },

        infoDesc:
        {
            fontSize: '14px',
            margin: '5px 0',
            textAlign: 'justify',
            '@media (min-width: 600px)': { // sm
                fontSize: '16px',
            },
            '@media (min-width: 900px)': { // md
                fontSize: '18px',
            },
        },

        info: {
            fontSize: '14px',
            margin: '5px 0',
            '@media (min-width: 600px)': { // sm
                fontSize: '16px',
            },
            '@media (min-width: 900px)': { // md
                fontSize: '18px',
            },
        },

        dataBox: {
            display: 'flex',
            alignItems: 'center',
            height: '40px',
        },

        dataSegment: {
            display: 'flex',
            alignItems: 'center',
        },

        rulesBox: {
            marginTop: '10px',
        },

        rulesTitle: {
            fontSize: '18px',
            fontWeight: 'bold',
        },

        rulesContent: {
            fontSize: '16px',
            margin: '5px 0 0 8px',
        },

        boxButton: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
        },

        botao: {
            backgroundColor: 'rgb(0, 82, 204)',
            color: 'white',
            '&:hover': {
                backgroundColor: 'rgb(0, 82, 204, 0.8)',
            },
            padding: '5px 36px',
            fontSize: '16px',
            borderRadius: '5px',
            '@media (min-width: 900px)': { // md
                padding: '5px 40px',
            },
        },
        modal: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '60%', lg: '50%' },
            bgcolor: 'background.paper',
            borderRadius: '8px',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },
        modalTitle: {
            fontSize: '24px',
            fontWeight: 'bold',
            mb: 2,
        },
        modalText: {
            fontSize: '16px',
            mb: 3,
            color: 'text.secondary',
        },
        modalButtonBox: {
            mt: 2,
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
        },
        modalButton: {
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': {
                bgcolor: 'primary.dark',
            },
            padding: '10px 20px',
            borderRadius: '5px',
        },
    };
};

export const style = () => Style();
