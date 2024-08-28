// xs: -> Tela Maior que 0px
// sm: -> Tela Maior que 600px
// md: -> Tela Maior que 900px
// lg: -> Tela Maior que 1200px
// xl: -> Tela Maior que 1536px

const Style = () => {
    return (
        {
            boxProva: {
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                width: '30%',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px 0px rgb(0, 0, 0, 0.1)',
                margin: '10px 0px 0px 0px',
            },
            
            titulo: {
                fontSize: '20px',
                fontWeight: 'bold',
            },

            boxButton: {
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center',
                width: '100%',
                height: '100%',
            },

            botao: {
                width: '30%',
                fontSize: '12px',
                backgroundColor: 'rgb(0, 0, 0)',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'rgb(0, 0, 0, 0.7)',
                },
                padding: '10px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                margin: '10px 0px 0px 0px',
            },
        }
    )
}

export const style = () => Style();