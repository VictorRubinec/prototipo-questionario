const Style = () => {
    return (
        {
            page: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                backgroundColor: '#f5f5f5',
            },

            title: {
                fontSize: '30px',
                fontWeight: 'bold',
                color: '#333',
                width: '100%',
                justifyContent: 'left',
                marginBottom: '20px',
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

            tableContainer: {
                width: '100%',
                borderRadius: '8px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            },

            table: {
                minWidth: 650,
                borderCollapse: 'collapse',
            },

            tableHeadCell: {
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#333',
                backgroundColor: '#e0e0e0',
                border: '1px solid #ddd',
                padding: '15px',
                textAlign: 'left',
            },

            tableHeadFinalCell: {
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#333',
                backgroundColor: '#e0e0e0',
                border: '1px solid #ddd',
                borderRight: 'none',
                padding: '12px',
                textAlign: 'left',
            },

            tableHeadActionCell: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#333',
                backgroundColor: '#e0e0e0',
                border: '1px solid #ddd',
                borderLeft: 'none',
                width: '100px',
            },

            tableBodyCell: {
                fontSize: '18px',
                color: '#333',
                border: '1px solid #ddd',
                padding: '12px',
                textAlign: 'left',
            },

            tableBodyFinalCell: {
                fontSize: '18px',
                color: '#333',
                border: '1px solid #ddd',
                borderRight: 'none',
                padding: '12px',
                textAlign: 'left',
            },

            tableBodyButton: {
                fontSize: '16px',
                color: '#333',
                border: '1px solid #ddd',
                borderLeft: 'none',
                padding: '12px',
                textAlign: 'right',
            },

            tableRow: {
                '&:nth-of-type(odd)': {
                    backgroundColor: '#f5f5f5',
                },
            },

            actionCell: {
                textAlign: 'center',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                border: '1px solid #ddd',
            },

            button: {
                padding: '6px 12px',
                fontSize: '14px',
                fontWeight: 'bold',
                textTransform: 'none',
                backgroundColor: 'var(--blue2)',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'var(--blue)',
                },
            },
        }
    )
}

export const style = () => Style();
