import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../api/weatherApi';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Box,
  Grid,
  Paper
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function MyCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather('Vasylkiv')
      .then(data => setWeather(data))
      .catch(error => console.error('Помилка завантаження погоди', error));
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4, bgcolor: '#fefefe' }}>
        <Typography variant="h3" color="#000000" gutterBottom>
          Моє рідне село — Багрин
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
          Багрин — це невеликий хутір (село), розташований у Васильківському районі. Він входить до складу
          однієї із сільських громад і вирізняється мальовничою природою, полями та лісами, в яких і досі
          живе дух скіфів та Русі. Перші згадки про село Багрин датуються XIX століттям.
        </Typography>

        {weather ? (
          <Card elevation={2} sx={{ mt: 3, borderRadius: 3, bgcolor: '#e3f2fd' }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <WbSunnyIcon fontSize="large" color="primary" />
                </Grid>
                <Grid item xs>
                  <Typography variant="h5" gutterBottom>
                    Погода зараз
                  </Typography>
                  <Typography variant="body1">
                    Температура: <strong>{weather.current.temp_c}°C</strong>
                  </Typography>
                  <Typography variant="body1">
                    Опис: {weather.current.condition.text}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <LocationOnIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                    {weather.location.name}, {weather.location.country}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Координати: {weather.location.lat}, {weather.location.lon}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <CircularProgress />
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default MyCity;