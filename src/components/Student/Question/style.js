// xs: -> Tela Maior que 0px
// sm: -> Tela Maior que 600px
// md: -> Tela Maior que 900px
// lg: -> Tela Maior que 1200px
// xl: -> Tela Maior que 1536px

const Style = () => {
    return (
        {
            question: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100vh',
                overflowY: 'auto',
            },
        }
    )
}

export const style = () => Style();