// xs: -> Tela Maior que 0px
// sm: -> Tela Maior que 600px
// md: -> Tela Maior que 900px
// lg: -> Tela Maior que 1200px
// xl: -> Tela Maior que 1536px

import { padding } from "@mui/system";

const Style = () => {
    return (
        {
            page: {
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: '100vh',
            },

            question: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                padding: '10px',
            },

            questionTitle: {
                fontSize: '20px',
                fontWeight: 'bold',
            },

            divider: {
                margin: '10px 0px',
            },

            questionText: {
                fontSize: '16px',
                margin: '10px 0',
            },

            alternatives: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                backgroundColor: '#e0e0e0',
                padding: '10px 20px',
                borderRadius: '5px',
            },

            alternative: {
                backgroundColor: '#f0f0f0',
                display: 'flex',
                flexDirection: 'row',
                margin: '5px 0',
                alignItems: 'center',
                borderRadius: '5px',
            },

            alternativeText: {
                fontSize: '16px',
            },

            textBox: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
                margin: '10px 0',
                alignItems: 'center',
            },

            radio: {
                margin: '0 5px',
            },

            textFieldComplete: {
                '& .MuiInputBase-root': {
                    fontSize: '16px',
                },
                width: '100px',
                margin: '0 10px',
            },

            textFieldResponse: {
                '& .MuiInputBase-root': {
                    fontSize: '16px',
                },
                '& .MuiInputBase-input': {
                    textAlign: 'center', 
                },
                margin: '0 5px',
                width: '30px',
            },
        }
    )
}

export const style = () => Style();