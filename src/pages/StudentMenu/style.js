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
                flexDirection: 'column',
                width: '100%',
                height: '100vh',
                backgroundColor: 'rgb(245, 245, 245)',
            },

            body: {
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                width: '100%',
                height: '100%',
            },

            menuTitulo: {
                fontSize: '30px',
                fontWeight: 'bold',
                margin: '10px 0px',
            },
        }
    )
}

export const style = () => Style();