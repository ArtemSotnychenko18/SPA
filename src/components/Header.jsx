import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#212121' }}> 
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          Мій Портфоліо
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/about">Про мене</Button>
          <Button color="inherit" component={Link} to="/my-city">Моє місто</Button>
          <Button color="inherit" component={Link} to="/my-future">Моє майбутнє</Button>
        </Box>
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;