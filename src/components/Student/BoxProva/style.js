const Style = () => {
    return (
        {
            boxProva: {
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                width: '100%',
                height: '180px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0px 0px 10px 0px rgb(0, 0, 0, 0.1)',
                margin: '10px 0px 0px 0px',
            },
            
            boxBody: {
                display: 'flex',
                flexDirection: 'row',
                padding: '10px',
                width: '100%',
                height: '100%',
            },

            titulo: {
                fontSize: '25px',
                fontWeight: 'bold',
            },

            divider: {
                width: '100%',
                height: '2px',
                borderRadius: '2px',
                margin: '10px 0px',
            },

            text: {
                fontSize: '16px',
            },

            boxData: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                height: '100%',
            },

            data: {
                fontSize: '18px',
                fontWeight: 'bold',
            },

            boxInfo: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
            },

            boxButton: {
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                height: '100%',
            },
            
            botao: {
                width: '150px',
                fontSize: '15px',
                backgroundColor: 'var(--blue2)',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'var(--blue)',
                },
                padding: '10px',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: 'auto',
                fontWeight: 'bold',
            },            
        }
    )
}

export const style = () => Style();
