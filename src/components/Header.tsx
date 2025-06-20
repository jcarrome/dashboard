import { Typography, Box } from '@mui/material';

const Header = () => (
  <Box
    sx={{
      width: '100%',
      mb: 2,
      py: 2,
      px: { xs: 1, md: 3 },
      background: '#fff',
      borderBottom: '3px solid #1976d2',
      boxShadow: '0 2px 8px 0 rgba(25, 118, 210, 0.07)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Typography
      variant="h4"
      component="h1"
      sx={{
        color: '#1976d2',
        fontWeight: 800,
        letterSpacing: 1,
        mb: 0.5,
        textAlign: 'center',
      }}
    >
      Dashboard del Clima
    </Typography>
    <Typography
      variant="subtitle2"
      sx={{
        color: '#555',
        fontWeight: 400,
        letterSpacing: 0.5,
        textAlign: 'center',
      }}
    >
      Datos clave para decisiones informadas
    </Typography>
  </Box>
);

export default Header;