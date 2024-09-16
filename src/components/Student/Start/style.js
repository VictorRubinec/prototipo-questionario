// xs: -> Tela Maior que 0px
// sm: -> Tela Maior que 600px
// md: -> Tela Maior que 900px
// lg: -> Tela Maior que 1200px
// xl: -> Tela Maior que 1536px

const Style = () => {
    return (
        {
            
            titulo: {
                fontSize: '30px',
                fontWeight: 'bold',
            },

            divider: {
                margin: '10px 0px',
            },

            infoBox: {
                display: 'flex',
                flexDirection: 'column',
                padding: '0 10px',
                width: '100%',
            },

            infoBold: {
                fontSize: '18px',
                fontWeight: 'bold',
            },

            info:{
                fontSize: '16px',
            },

            boxButton: {
                display: 'flex',
                width: '100%',
                padding: '10px 0',
            },

            dataBox:{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                padding: '0 10px',
            },

            botao: {
                backgroundColor: 'rgb(0, 82, 204)',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'rgb(0, 82, 204, 0.8)',
                },
                padding: '8px 24px',
                borderRadius: '5px',
            }
        }
    )
}

export const style = () => Style();