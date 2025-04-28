import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Stack,
  Card,
  CardContent
} from '@mui/material';

function MyFuture() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4, bgcolor: '#fefefe' }}>
        <Typography variant="h3" color="#00000" gutterBottom>
          Мій розвиток
        </Typography>

        <Stack spacing={3} sx={{ mt: 3 }}>
          <Card>
            <CardContent>
              <Typography>
                Я буду постійно вдосконалювати себе і ніщо мене не здатне зупинити
              </Typography>
            </CardContent>
          </Card>
        </Stack>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Мотиваційні цитати
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 1 }}>
            "Не той вільний, хто відкидає панування, а той, хто здатен сам себе панувати." — Юліус Евола
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
            "Людина не може вижити без священного сенсу. Там, де зникає священне, життя руйнується у хаосі." — Мірча Еліаде
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default MyFuture;
