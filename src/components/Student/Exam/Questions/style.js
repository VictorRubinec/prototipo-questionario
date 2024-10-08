
const Style = () => {
    return {
        page: {
            display: 'flex',
            flexDirection: 'row',
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            padding: '15px',
        },
        question: {
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
            height: '100vh',
            overflowY: 'auto',
        },
        examTitle: {
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
        examInfo: {
            position: 'fixed',
            right: 0,
            top: 0,
            height: '100vh',
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: 'var(--pink)',
            boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.1)',
        },
        examInfoContent: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        },
        listQuestions: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(30px, 1fr))',
            gridGap: '5px',
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            backgroundColor: 'var(--darkpink)',
            borderRadius: '5px',
        },
        questionButton: {
            padding: '5px',
            fontSize: '18px',
            textAlign: 'center',
            backgroundColor: 'var(--pink2)',
            '&:disabled': {
                backgroundColor: '#d0d0d0',
            },
            borderRadius: '5px',
            width: '30px',
            height: '50px',
        },
        buttons: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '10px',
            marginTop: 'auto',
        },
        button: {
            width: '120px',
            margin: '0 10px',
            borderRadius: '5px',
            backgroundColor: 'var(--blue2)',
            color: 'white',
            '&:hover': {
                backgroundColor: 'var(--blue)',
            },
            '&:disabled': {
                backgroundColor: 'var(--lightblue)',
                color: 'white',
            },
        },
        buttonFooter: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'right',
            alignItems: 'center',
            width: '100%',
            padding: '10px',
            marginTop: 'auto',
        },
        finalizeButton: {
            width: '160px',
            marginTop: '10px',
            fontSize: '18px',
            fontWeight: 'bold',
            borderRadius: '5px',
            backgroundColor: 'var(--purple)',
            color: 'white',
            '&:hover': {
                backgroundColor: 'var(--purple2)',
            },
        },
        modalContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        modal: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '400px',
            height: '150px',
            backgroundColor: 'white',
            borderRadius: '5px',
            padding: '20px',
        },
        modalButtons: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: 'auto',
        },
        modalButton: {
            width: '100px',
            margin: '0 10px',
            borderRadius: '5px',
            backgroundColor: 'var(--blue2)',
            color: 'white',
            '&:hover': {
                backgroundColor: 'var(--blue)',
            },
        },

    };
};

export const style = () => Style();
