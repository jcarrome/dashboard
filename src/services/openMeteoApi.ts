const ubicaciones: Record<string, { lat: number; lon: number }> = {
  madrid: { lat: 40.4168, lon: -3.7038 },
  buenosaires: { lat: -34.6037, lon: -58.3816 },
  cdmx: { lat: 19.4326, lon: -99.1332 },
  ny: { lat: 40.7128, lon: -74.006 },
};

export async function getWeather(location: string) {
  const coords = ubicaciones[location];
  if (!coords) return null;

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&hourly=temperature_2m,relative_humidity_2m,windspeed_10m&current_weather=true&timezone=auto`;

  const res = await fetch(url);
  if (!res.ok) return null;
  return res.json();
}