import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

export default function SelectorUI() {
  const [cityInput, setCityInput] = useState('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setCityInput(event.target.value);
  };

  // Función para capitalizar la primera letra
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <FormControl fullWidth>
      <InputLabel id="city-select-label">Ciudad</InputLabel>
      <Select
        labelId="city-select-label"
        id="city-simple-select"
        value={cityInput}
        label="Ciudad"
        onChange={handleChange}
      >
        <MenuItem disabled value="">
          <em>Seleccione una ciudad</em>
        </MenuItem>
        <MenuItem value={"guayaquil"}>Guayaquil</MenuItem>
        <MenuItem value={"quito"}>Quito</MenuItem>
        <MenuItem value={"manta"}>Manta</MenuItem>
        <MenuItem value={"cuenca"}>Cuenca</MenuItem>
      </Select>
      {cityInput && (
        <p style={{ marginTop: 16 }}>
          Información del clima en{' '}
          <b>{capitalize(cityInput)}</b>
        </p>
      )}
    </FormControl>
  );
}