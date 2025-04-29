import { Box, Typography, Link as MuiLink } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#212121', color: '#ffffff', p: 2, textAlign: 'center' }}>
      <Typography variant="body3">
        Зв'язатися: 
        <MuiLink href="https://github.com/ArtemSotnychenko18" color="inherit" underline="hover" sx={{ mx: 1 }}>
          GitHub
        </MuiLink>
        |
        <MuiLink href="mailto:kn23-a.sotnychenko@nubip.edu.ua" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Email
        </MuiLink>
      </Typography>
    </Box>
  );
};

export default Footer;