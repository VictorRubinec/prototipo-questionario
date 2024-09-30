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
                color: 'var(--lightyellow)',
                margin: '15px 0px',
            },

            button: {
                width: '50%',
                backgroundColor: 'var(--yellow)',
                color: 'black',
                '&:hover': {
                    backgroundColor: 'var(--darkyellow)', 
                },
                margin: '25px 0px',
                padding: '10px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: 'bold',
            },

            input: {
                width: '80%',
                margin: '5px 0px',
                padding: '0px',
                fontSize: '28px',
                backgroundColor: 'var(--lightyellow)',
                '&:hover': {
                    backgroundColor: 'var(--yellow2)', 
                },
                '&:focus': {
                    backgroundColor: 'var(--yellow2)', 
                },
                borderRadius: '5px',
                border: 'none',
                boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.1)',
            }
        }
    )
}

export const style = () => Style();