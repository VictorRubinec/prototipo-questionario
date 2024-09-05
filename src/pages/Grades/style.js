import { padding } from "@mui/system";

const Style = () => {
    return (
        {
            box: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                width: '100%',
                backgroundColor: '#f5f5f5',
                padding: '20px',
            },

            title: {
                fontSize: '30px',
                fontWeight: 'bold',
                color: '#333',
                width: '100%',
                justifyContent: 'left',
                marginBottom: '20px',
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
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#333',
                backgroundColor: '#e0e0e0',
                border: '1px solid #ddd',
                padding: '12px',
                textAlign: 'left',
            },

            tableHeadActionCell: {
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#333',
                backgroundColor: '#e0e0e0',
                border: '1px solid #ddd',
                padding: '12px',
                textAlign: 'center',
                width: '210px',
            },

            tableBodyCell: {
                fontSize: '16px',
                color: '#333',
                border: '1px solid #ddd',
                padding: '12px',
                textAlign: 'left',
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
            },
        }
    )
}

export const style = () => Style();
