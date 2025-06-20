import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Chip,
  Fade,
} from '@mui/material';

interface TablaProps {
  rows: { fecha: string; temp: number; humedad: number; viento: number }[];
}

const getTempColor = (temp: number) => {
  if (temp >= 35) return 'error';
  if (temp >= 25) return 'warning';
  if (temp >= 15) return 'success';
  return 'info';
};

const Tabla = ({ rows }: TablaProps) => (
  <TableContainer
    component={Paper}
    sx={{
      mb: 4,
      borderRadius: 5,
      boxShadow: '0 8px 32px 0 rgba(25, 118, 210, 0.15)',
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(6px)',
      overflow: 'auto', // <-- Cambia a 'auto'
      border: '1px solid #e3f2fd',
      maxHeight: 320,   // <-- Limita la altura
    }}
  >
    <Box
      sx={{
        p: 4,
        pb: 2,
        background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
      }}
    >
      <Typography
        variant="h4"
        fontWeight={800}
        color="#fff"
        gutterBottom
        letterSpacing={1}
      >
        Detalle de condiciones climáticas
      </Typography>
      <Typography variant="body1" color="#e3f2fd">
        Consulta los valores horarios de temperatura, humedad y viento.
      </Typography>
    </Box>
    <Table
      sx={{
        minWidth: 650,
        '& th, & td': { borderBottom: 'none' },
      }}
      aria-label="tabla de clima"
    >
      <TableHead>
        <TableRow
          sx={{
            background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
            position: 'sticky',
            top: 0,
            zIndex: 1,
          }}
        >
          <TableCell sx={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>
            Fecha
          </TableCell>
          <TableCell sx={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>
            Temperatura
          </TableCell>
          <TableCell sx={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>
            Humedad
          </TableCell>
          <TableCell sx={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>
            Viento
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, i) => (
          <Fade in timeout={500 + i * 50} key={i}>
            <TableRow
              sx={{
                background: i % 2 === 0 ? '#f5faff' : '#e3f2fd',
                transition: 'background 0.3s',
                '&:hover': {
                  background: 'rgba(25, 118, 210, 0.08)',
                  boxShadow: '0 2px 8px 0 rgba(25, 118, 210, 0.10)',
                },
              }}
            >
              <TableCell>
                <Typography variant="body2" fontWeight={600} color="primary">
                  {row.fecha}
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  label={`${row.temp}°C`}
                  color={getTempColor(row.temp)}
                  variant="filled"
                  sx={{
                    fontWeight: 700,
                    fontSize: 15,
                    px: 2,
                    bgcolor: 'rgba(25,118,210,0.07)',
                  }}
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={`${row.humedad}%`}
                  color="primary"
                  variant="outlined"
                  sx={{
                    fontWeight: 700,
                    fontSize: 15,
                    px: 2,
                    bgcolor: 'rgba(33,150,243,0.04)',
                  }}
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={`${row.viento} km/h`}
                  color="secondary"
                  variant="outlined"
                  sx={{
                    fontWeight: 700,
                    fontSize: 15,
                    px: 2,
                    bgcolor: 'rgba(156,39,176,0.04)',
                  }}
                />
              </TableCell>
            </TableRow>
          </Fade>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default Tabla;