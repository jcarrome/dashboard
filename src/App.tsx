import { useEffect, useState } from 'react';
import { Grid, Paper, Box } from '@mui/material';
import Header from './components/Header';
import Alertas from './components/Alertas';
import Selector from './components/Selector';
import Indicadores from './components/Indicadores';
import Grafico from './components/Grafico';
import Tabla from './components/Tabla';
import InfoAdicional from './components/InfoAdicional';
import { getWeather } from './services/openMeteoApi';

function App() {
  const [location, setLocation] = useState('madrid');
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    getWeather(location).then(setWeather);
  }, [location]);

  // Procesar datos para los componentes
  const alerta = weather?.current_weather?.temperature > 35
    ? '¡Alerta de calor extremo!'
    : undefined;

  const temperatura = weather?.current_weather?.temperature;
  const humedad = weather?.hourly?.relative_humidity_2m?.[0];
  const viento = weather?.current_weather?.windspeed;

  // Solo mostramos 6 horas para evitar scroll
  const labels = weather?.hourly?.time?.slice(0, 6) || [];
  const data = weather?.hourly?.temperature_2m?.slice(0, 6) || [];

  const rows = labels.map((fecha: string, i: number) => ({
    fecha,
    temp: weather?.hourly?.temperature_2m?.[i],
    humedad: weather?.hourly?.relative_humidity_2m?.[i],
    viento: weather?.hourly?.windspeed_10m?.[i],
  }));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(120deg, #e3f2fd 0%, #f3e5f5 100%)',
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 2,
        flexDirection: 'column',
      }}
    >
      {/* Header fuera del Paper, ocupa todo el ancho */}
      <Box sx={{ width: '100%', maxWidth: 1100, mx: 'auto' }}>
        <Header />
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: 1100,
          width: '100%',
          margin: '0 auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Segunda fila: Alertas y Selector */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 1, borderRadius: 3, boxShadow: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Alertas alerta={alerta} />
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 1, borderRadius: 3, boxShadow: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Selector location={location} setLocation={setLocation} />
          </Paper>
        </Grid>
        {/* Tercera fila: Gráfico e Indicadores */}
        {/* Gráfico en una sola fila */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 1, borderRadius: 3, boxShadow: 2, minHeight: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Grafico labels={labels} data={data} />
          </Paper>
        </Grid>
        {/* Indicadores en la siguiente fila */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 1, borderRadius: 3, boxShadow: 2, minHeight: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Indicadores temperatura={temperatura} humedad={humedad} viento={viento} />
          </Paper>
        </Grid>
        {/* Cuarta fila: Tabla */}
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 1,
              borderRadius: 3,
              boxShadow: 2,
              minHeight: 320,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ flex: 1, minHeight: 0, maxHeight: 280, overflowY: 'auto', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Tabla rows={rows} />
            </Box>
          </Paper>
        </Grid>
        {/* Última fila: Info adicional */}
        <Grid item xs={12}>
          <Paper sx={{ p: 1, borderRadius: 3, boxShadow: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <InfoAdicional />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;