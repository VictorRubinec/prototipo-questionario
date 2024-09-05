// xs: -> Tela Maior que 0px
// sm: -> Tela Maior que 600px
// md: -> Tela Maior que 900px
// lg: -> Tela Maior que 1200px
// xl: -> Tela Maior que 1536px

const Style = () => {
    return (
        {
            box: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
            },

            title: {
                fontSize: '1.5em',
                fontWeight: 'bold',
                color: '#000'
            },

            subtitle: {
                fontSize: '1em',
                color: '#000'
            },

            divider: {
                width: '100%',
                height: '1px',
                backgroundColor: '#000',
                margin: '10px 0'
            },

            charts: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                height: '100%'
            },
        }
    )
}

export const style = () => Style();