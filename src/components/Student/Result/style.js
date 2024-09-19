// xs: -> Tela Maior que 0px
// sm: -> Tela Maior que 600px
// md: -> Tela Maior que 900px
// lg: -> Tela Maior que 1200px
// xl: -> Tela Maior que 1536px

const Style = () => {
    return (
        {
            page: {
                padding: '10px',
                backgroundColor: '#f4f4f4',
            },
            examHeader: {
                marginBottom: '20px',
            },
            examTitle: {
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#333',
            },
            tableContainer: {
                marginTop: '20px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '4px',
            },
            examResult: {
                marginTop: '20px',
                padding: '10px',
                borderRadius: '4px',
            },
            examResultText: {
                fontSize: '18px',
                marginBottom: '10px',
            },
            questionRow: (acerto_percentual) => ({
                backgroundColor:
                    acerto_percentual === 1.00 ? 'rgba(144, 238, 144, 0.5)' : // Verde leve
                        acerto_percentual === 0.00 ? 'rgba(255, 99, 71, 0.5)' : // Coral leve
                            'rgba(255, 255, 224, 0.5)', // Amarelo leve
            }),
        }
    )
}

export const style = () => Style();