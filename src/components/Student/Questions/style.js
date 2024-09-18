import { borderRadius } from "@mui/system";

const Style = () => {
    return {
        page: {
            display: 'flex',
            flexDirection: 'row',
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
        },
        question: {
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
            height: '100vh',
            overflowY: 'auto',
        },
        examInfo: {
            position: 'fixed',
            right: 0,
            top: 0,
            height: '100vh',
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: '#f0f0f0',
            boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.1)',
        },
        listQuestions: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(30px, 1fr))', // Ajustar para o mínimo tamanho possível
            gridGap: '5px', // Diminuir o espaço entre os botões
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            backgroundColor: '#e0e0e0',
            borderRadius: '5px',
        },
        questionButton: {
            padding: '5px', // Tamanho interno menor
            fontSize: '18px', // Fonte reduzida
            backgroundColor: '#e0e0e0',
            textAlign: 'center', // Centralizar o número do botão
            '&:disabled': {
                backgroundColor: '#d0d0d0',
            },
            borderRadius: '5px',
            width: '30px', // Largura mínima
            height: '50px', // Altura mínima
        },
        buttons: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '10px',
            marginTop: 'auto',
        },
        button: {
            width: '100px',
            margin: '0 10px',
            borderRadius: '5px',
            backgroundColor: '#f0f0f0',
            '&:hover': {
                backgroundColor: '#e0e0e0',
            },
        },
    };
};

export const style = () => Style();
