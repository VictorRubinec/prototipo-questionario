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
                alignItems: 'center',
                height: '100vh',
                width: '100%',
                backgroundColor: '#f5f5f5'
            },

            title: {
                fontSize: '30px',
                fontWeight: 'bold',
                color: '#333',
                width: '100%',
                justifyContent: 'left',
                margin: '20px 0 0 20px',
            },

            divider: {
                width: '100%',
            },

            profileBox: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                padding: '20px',
                borderRadius: '5px',
                margin: '20px 0 0 0'
            },

            profileInfo: {
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: '100%',
            },

            profileSubtitle: {
                fontSize: '22px',
                color: '#333',
            },

            info: {
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '20px'
            },

            userComponent: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '10px',
            },

            input: {
                width: '250px',
                margin: '0 0 10px 0',
                padding: '10px',
            },

            userTitle: {
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '10px'
            },

            userSubtitle: {
                fontSize: '18px',
                color: '#333',
                marginBottom: '10px'
            },

            userHeader: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginBottom: '10px'
            },

            user: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                backgroundColor: '#fff',
                borderRadius: '5px',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
                padding: '20px'
            },

            userInfo: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            },

            avatar: {
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                marginBottom: '20px'
            },

            profileText: {
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#333'
            },

            button: {
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
            },

        }
    )
}

export const style = () => Style();