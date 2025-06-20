import { Card, CardContent, Typography, Grid } from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';

interface IndicadoresProps {
  temperatura?: number;
  humedad?: number;
  viento?: number;
}

const Indicadores = ({ temperatura, humedad, viento }: IndicadoresProps) => (
  <Grid container spacing={2} direction="column" alignItems="stretch">
    <Grid item xs={12}>
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: 3,
          background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
        }}
      >
        <CardContent sx={{ textAlign: 'center' }}>
          <DeviceThermostatIcon sx={{ fontSize: 36, color: '#1976d2' }} />
          <Typography variant="subtitle1" fontWeight={700} color="primary">
            Temperatura
          </Typography>
          <Typography variant="h5" fontWeight={900} color="#1976d2">
            {temperatura ?? '--'}°C
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12}>
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: 3,
          background: 'linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 100%)',
        }}
      >
        <CardContent sx={{ textAlign: 'center' }}>
          <WaterDropIcon sx={{ fontSize: 36, color: '#0288d1' }} />
          <Typography variant="subtitle1" fontWeight={700} color="primary">
            Humedad
          </Typography>
          <Typography variant="h5" fontWeight={900} color="#0288d1">
            {humedad ?? '--'}%
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12}>
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: 3,
          background: 'linear-gradient(135deg, #ede7f6 0%, #b39ddb 100%)',
        }}
      >
        <CardContent sx={{ textAlign: 'center' }}>
          <AirIcon sx={{ fontSize: 36, color: '#7e57c2' }} />
          <Typography variant="subtitle1" fontWeight={700} color="primary">
            Viento
          </Typography>
          <Typography variant="h5" fontWeight={900} color="#7e57c2">
            {viento ?? '--'} km/h
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default Indicadores;