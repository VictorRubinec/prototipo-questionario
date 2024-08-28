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
                width: '100%',
                height: '100vh',
                backgroundColor: 'rgb(245, 245, 245)',
            },

            loginBox: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '30%',
                height: '50%',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px 0px rgb(0, 0, 0, 0.1)',
            },

            titulo: {
                fontSize: '30px',
                fontWeight: 'bold',
            },

            button: {
                width: '40%',
                backgroundColor: 'rgb(0, 0, 0)',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'rgb(0, 0, 0, 0.7)',
                },
                margin: '15px 0px',
                padding: '10px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
            },

            input: {
                width: '80%',
                margin: '5px 0px',
                padding: '0px',
                backgroundColor: 'rgb(245, 245, 245)',
                '&:hover': {
                    backgroundColor: 'rgb(245, 245, 245)',
                },
                '&:focus': {
                    backgroundColor: 'rgb(245, 245, 245)',
                },
                borderRadius: '5px',
                border: 'none',
                boxShadow: '0px 0px 5px 0px rgb(0, 0, 0, 0.1)',

           }
        }
    )
}

export const style = () => Style();