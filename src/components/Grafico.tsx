import { Line } from 'react-chartjs-2';
import { Box, Typography, Paper } from '@mui/material';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler);

interface GraficoProps {
  labels: string[];
  data: number[];
}

const Grafico = ({ labels, data }: GraficoProps) => (
  <Paper
    elevation={4}
    sx={{
      mb: 3,
      borderRadius: 5,
      p: 3,
      background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
      boxShadow: '0 8px 32px 0 rgba(25, 118, 210, 0.10)',
    }}
  >
    <Typography
      variant="h5"
      fontWeight={700}
      color="primary"
      gutterBottom
      sx={{ mb: 2 }}
    >
      Temperatura a lo largo del tiempo
    </Typography>
    <Line
      data={{
        labels,
        datasets: [
          {
            label: 'Temperatura (°C)',
            data,
            borderColor: '#1976d2',
            backgroundColor: 'rgba(25, 118, 210, 0.15)',
            fill: true,
            tension: 0.4,
            pointRadius: 3,
            pointBackgroundColor: '#1976d2',
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1976d2',
            titleColor: '#fff',
            bodyColor: '#fff',
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#1976d2', font: { weight: 'bold' } },
          },
          y: {
            grid: { color: '#e3f2fd' },
            ticks: { color: '#1976d2', font: { weight: 'bold' } },
          },
        },
      }}
    />
  </Paper>
);

export default Grafico;