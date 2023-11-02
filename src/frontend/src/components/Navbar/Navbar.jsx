import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Link to='/clients'>
            <Button color='inherit'>Clientes</Button>
          </Link>
          <Button color='inherit'>Produtos</Button>
          <Button color='inherit'>Vendas</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
