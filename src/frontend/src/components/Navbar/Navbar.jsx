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
          <Link to='/'>
            <Button color='inherit'>Home</Button>
          </Link>
          <Link to='/clientes'>
            <Button color='inherit'>Clientes</Button>
          </Link>
          <Link to='/produtos'>
            <Button color='inherit'>Produtos</Button>
          </Link>
          <Link to='/vendas'>
            <Button color='inherit'>Vendas</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
