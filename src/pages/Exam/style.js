// xs: -> Tela Maior que 0px
// sm: -> Tela Maior que 600px
// md: -> Tela Maior que 900px
// lg: -> Tela Maior que 1200px
// xl: -> Tela Maior que 1536px

const Style = () => {
    return (
        {
            page: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh',
            },

            examBox: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '40%',
                padding: '20px',
                backgroundColor: 'rgb(240, 240, 240)',
                boxShadow: '5px 5px 15px gray',
                borderRadius: '5px',
            },

            titulo: {
                fontSize: '30px',
                fontWeight: 'bold',
            },

            texto: {
                textAlign: 'center',
                margin: '20px',
            },

            button: {
                backgroundColor: 'black',
                color: 'white',
                width: '50%',
                '&:hover': {
                    backgroundColor: 'black',
                },
            }
        }
    )
}

export const style = () => Style();