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
                padding: '5px 10px',
            },
            menuTitulo: {
                fontSize: '20px',
                fontWeight: 'bold',
            },
            infoHeader: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
            },
            input: (isEditable) => ({
                fontSize: '16px',
                borderRadius: '4px',
                backgroundColor:
                    isEditable === true ? 'white' : 'rgba(0, 0, 0, 0.1)',
            }),
            editButton: {
                marginLeft: '16px',
                backgroundColor: 'var(--blue2)',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'var(--blue)',
                },
                width: '150px',
                fontWeight: 'bold',
            },
        }
    )
}

export const style = () => Style();