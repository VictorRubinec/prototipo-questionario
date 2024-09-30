// xs: -> Tela Maior que 0px
// sm: -> Tela Maior que 600px
// md: -> Tela Maior que 900px
// lg: -> Tela Maior que 1200px
// xl: -> Tela Maior que 1536px

import Logo from '../../assets/images/logo.png';

const Style = () => {
    return (
        {
            page: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                background: 'radial-gradient(circle, var(--pink) 20%, var(--bgpink ) 100%)',
            },            

            loginBox: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '450px',
                height: '500px',
                borderRadius: '10px',

                '@media (max-width: 900px)': { // md: Tela menor que 900px
                    width: '350px',
                    height: '450px',
                },
                '@media (max-width: 600px)': { // sm: Tela menor que 600px
                    width: '300px',
                    height: '400px',
                }
            },

            loginHeader: {
                width: '100%',
                height: '35%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },

            loginBody: {
                width: '100%',
                height: '80%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },

            divider: {
                width: '90%',
                height: '3px',
                borderRadius: '5px',
                backgroundColor: 'var(--lightyellow)',
                margin: '10px 0px',
            },

            logo: {
                backgroundImage: `url(${Logo})`,
                backgroundSize: 'cover',
                width: '215px',
                height: '110px',
            },
        }
    )
}

export const style = () => Style();