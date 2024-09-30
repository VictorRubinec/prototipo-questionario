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
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                minHeight: '100vh',
                backgroundColor: 'rgb(245, 245, 245)',
            },

            bodyOpen: {
                display: 'flex',
                flexDirection: 'column',
                padding: '15px',
                width: '100%',
                height: '100%',
                margin: '0 0 0 250px',
                transition: 'margin 0.5s ease',
            },

            bodyClosed: {
                display: 'flex',
                flexDirection: 'column',
                padding: '15px',
                width: '100%',
                height: '100%',
                margin: '0 0 0 60px',
                transition: 'margin 0.5s ease',
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