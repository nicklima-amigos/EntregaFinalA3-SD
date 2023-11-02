import { Button } from '@mui/material';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { SingleClient } from '../components/clients/SingleClient/SingleClient';
import { grey } from '@mui/material/colors';

export function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch('http://localhost:8000/clients');
      const data = await response.json();
      setClients(data);
    };

    fetchClients();
  }, []);

  return (
    <>
      <Button>Cadastrar Cliente</Button>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '800px',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: 1,
            marginBottom: 2,
            borderBottom: 'solid 1px black',
            backgroundColor: grey[200],
          }}
        >
          <Box sx={{ width: '30%' }}>Nome:</Box>
          <Box sx={{ width: '30%' }}>Data de criação:</Box>
          <Box sx={{ width: '20%' }}></Box>
          <Box sx={{ width: '20%' }}></Box>
        </Box>
        {clients.map((client) => {
          return SingleClient({ client });
        })}
      </Box>
    </>
  );
}
