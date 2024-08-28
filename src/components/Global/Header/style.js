// xs: -> Tela Maior que 0px
// sm: -> Tela Maior que 600px
// md: -> Tela Maior que 900px
// lg: -> Tela Maior que 1200px
// xl: -> Tela Maior que 1536px

const Style = () => {
    return (
        {
            header: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                height: '10vh',
                padding: '10px 20px',
                backgroundColor: 'rgb(0, 0, 0)',
                color: 'white',
            },

            titulo: {
                fontSize: '30px',
                fontWeight: 'bold',
            },

            avatar: {
                width: '45px',
                height: '45px',
            },
        }
    )
}

export const style = () => Style();