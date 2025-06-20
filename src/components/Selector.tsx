import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface SelectorProps {
  location: string;
  setLocation: (loc: string) => void;
}

const ubicaciones = [
  { nombre: 'Madrid', valor: 'madrid' },
  { nombre: 'Buenos Aires', valor: 'buenosaires' },
  { nombre: 'Ciudad de México', valor: 'cdmx' },
  { nombre: 'Nueva York', valor: 'ny' },
];

const Selector = ({ location, setLocation }: SelectorProps) => (
  <Box sx={{ mb: 3, maxWidth: 350, mx: 'auto' }}>
    <FormControl fullWidth variant="outlined" sx={{ borderRadius: 2 }}>
      <InputLabel>
        <LocationOnIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
        Ubicación
      </InputLabel>
      <Select
        value={location}
        label="Ubicación"
        onChange={e => setLocation(e.target.value)}
        sx={{
          borderRadius: 2,
          background: 'rgba(33,150,243,0.06)',
          fontWeight: 600,
        }}
      >
        {ubicaciones.map(u => (
          <MenuItem key={u.valor} value={u.valor}>
            <LocationOnIcon sx={{ mr: 1, color: '#1976d2' }} />
            {u.nombre}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Box>
);

export default Selector;