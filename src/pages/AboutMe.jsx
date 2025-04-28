import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Stack,
  Card,
  CardContent
} from '@mui/material';

function AboutMe() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4, bgcolor: '#fefefe' }}>
        <Typography variant="h3" color="#000000" gutterBottom>
          Про мене
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
          Я — нащадок польської шляхти та київських козаків. Безліч моїх предків здобували перемоги у війнах і займали керівні посади. З ранніх літ я відчував покликання прагнути вищого й наполегливо працював для досягнення своєї цілі.
          Сьогодні моя ціль — стати найкращим веброзробником, якого вам коли-небудь судилося зустріти. Не взяти мене на роботу — це ваша найбільша помилка в житті.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Мої цінності
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Справедливість, Віра, Сила.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Мої проєкти
        </Typography>

        <Stack spacing={3} sx={{ mt: 2 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">HTML + CSS</Typography>
              <Button
                variant="outlined"
                href="https://github.com/ArtemSotnychenko18/css-pratice-1"
                target="_blank"
                sx={{ mt: 1 }}
              >
                Перейти до проекту
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6">JavaScript</Typography>
              <Button
                variant="outlined"
                href="https://github.com/ArtemSotnychenko18/js-fetchFirstLab"
                target="_blank"
                sx={{ mt: 1 }}
              >
                Перейти до проекту
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6">React</Typography>
              <Button
                variant="outlined"
                href="https://github.com/ArtemSotnychenko18/Gallery"
                target="_blank"
                sx={{ mt: 1 }}
              >
                Перейти до проекту
              </Button>
            </CardContent>
          </Card>
        </Stack>
      </Paper>
    </Container>
  );
}

export default AboutMe;
