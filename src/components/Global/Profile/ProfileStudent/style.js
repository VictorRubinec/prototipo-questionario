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
                alignItems: 'center',
                padding: '16px',
            },
            avatar: {
                width: 140,
                height: 140,
                marginRight: '16px',
            },
            nome: {
                fontSize: '24px',
                fontWeight: 'bold',
            },
            headerInfo: {
                display: 'flex',
                flexDirection: 'column',
            },
            info: {
                fontSize: '16px',
            },
            divider: {
                margin: '10px 0',
            },
            body: {
                padding: '8px',
            },
            menuTitulo: {
                fontSize: '18px',
                fontWeight: 'bold',
            },
            infoHeader: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
            },
            input: {
                marginBottom: '16px',
                width: '100%',
            },
            editButton: {
                marginLeft: '16px',
            },
        }
    )
}

export const style = () => Style();