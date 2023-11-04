import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { Container } from '@mui/material';

export function Root() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
