import { Alert, Box, Slide } from '@mui/material';

const Alertas = ({ alerta }: { alerta?: string }) => (
  <Slide direction="down" in mountOnEnter unmountOnExit>
    <Box sx={{ mb: 3 }}>
      {alerta ? (
        <Alert
          severity="warning"
          variant="filled"
          sx={{
            fontWeight: 600,
            fontSize: 18,
            borderRadius: 2,
            boxShadow: 2,
            background: 'linear-gradient(90deg, #ff9800 0%, #ffc107 100%)',
            color: '#fff',
          }}
        >
          {alerta}
        </Alert>
      ) : (
        <Alert
          severity="info"
          variant="outlined"
          sx={{
            fontWeight: 500,
            fontSize: 16,
            borderRadius: 2,
            background: 'rgba(33,150,243,0.06)',
          }}
        >
          No hay alertas climáticas importantes.
        </Alert>
      )}
    </Box>
  </Slide>
);

export default Alertas;