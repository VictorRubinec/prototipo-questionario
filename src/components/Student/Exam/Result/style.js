// xs: -> Tela Maior que 0px
// sm: -> Tela Maior que 600px
// md: -> Tela Maior que 900px
// lg: -> Tela Maior que 1200px
// xl: -> Tela Maior que 1536px

const Style = () => {
    return (
        {
            page: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
            },
            table: {
                minWidth: 650,
                borderCollapse: 'collapse',
            },
            body: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                padding: '5px 10px',
            },

            divider: {
                width: '100%',
                marginBottom: '20px',
            },
            examTitle: {
                fontSize: '30px',
                fontWeight: 'bold',
                color: '#333',
            },
            tableHeadCell: {
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#333',
                backgroundColor: '#e0e0e0',
                border: '1px solid #ddd',
                padding: '12px',
                textAlign: 'left',
            },
            tableBodyCell: {
                fontSize: '18px',
                color: '#333',
                padding: '10px',
                textAlign: 'left',
            },
            tableContainer: {
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '4px',
            },
            examResult: {
                marginTop: '20px',
                padding: '10px',
                borderRadius: '4px',
            },
            examResultText: {
                fontSize: '20px',
                marginBottom: '10px',
            },
            questionRow: (acerto_percentual) => ({
                border: '1px solid #ddd',
                backgroundColor:
                    acerto_percentual === 1.00 ? 'rgba(144, 238, 144, 0.5)' : // Verde leve
                        acerto_percentual === 0.00 ? 'rgba(255, 99, 71, 0.5)' : // Coral leve
                            'rgba(255, 255, 224, 0.5)', // Amarelo leve
            }),
        }
    )
}

export const style = () => Style();