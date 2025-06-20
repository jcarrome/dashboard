import { Card, CardContent, Typography, Box } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const InfoAdicional = () => (
  <Card
    sx={{
      mb: 3,
      borderRadius: 4,
      boxShadow: 3,
      background: 'linear-gradient(90deg, #f3e5f5 0%, #e1bee7 100%)',
    }}
  >
    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ mr: 2 }}>
        <InfoOutlinedIcon sx={{ fontSize: 40, color: '#7e57c2' }} />
      </Box>
      <Box>
        <Typography variant="h6" fontWeight={700} color="#7e57c2">
          Consejo
        </Typography>
        <Typography variant="body1" color="text.secondary" fontWeight={500}>
          Recuerda revisar el pronóstico antes de planear actividades al aire libre.
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default InfoAdicional;