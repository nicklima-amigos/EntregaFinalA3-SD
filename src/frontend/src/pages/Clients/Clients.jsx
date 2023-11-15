import { Button, Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { grey } from '@mui/material/colors';
import { SingleClient } from '../../components/clients/SingleClient/SingleClient';
import { useClients } from '../../hooks/useClients';
import { Link } from 'react-router-dom';
import { clientService } from '../../service/clients';

export function Clients() {
  const { clients, setClients } = useClients();

  const handleDelete = (clientId) => {
    return async () => {
      await clientService.deleteClient(clientId);
      setClients(clients.filter((client) => client.id !== clientId));
    };
  };

  return (
    <Container sx={{ maxWidth: 1000, textAlign: 'center' }}>
      <Link to='/clientes/cadastrar'>
        <Button sx={{ margin: 2 }}>Cadastrar Cliente</Button>
      </Link>

      <Grid2
        container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '800px',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <Grid2
          container
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: 2,
            borderBottom: 'solid 1px black',
            backgroundColor: grey[200],
            borderRadius: 2,
            borderEndEndRadius: 0,
            borderEndStartRadius: 0,
          }}
          xs={12}
        >
          <Grid2 xs={4}>Nome:</Grid2>
          <Grid2 xs={4}>Data de criação:</Grid2>
          <Grid2 xs={2}></Grid2>
          <Grid2 xs={2}></Grid2>
        </Grid2>
        {clients.map((client, index) => {
          return (
            <SingleClient
              key={index}
              client={client}
              handleDelete={handleDelete(client.id)}
            />
          );
        })}
      </Grid2>
    </Container>
  );
}
