import { Button, Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { grey } from '@mui/material/colors';
import { SingleClient } from '../components/clients/SingleClient/SingleClient';
import { useClients } from '../components/hooks/useClients';

export function Clients() {
  const { clients } = useClients();

  return (
    <Container sx={{ maxWidth: 1000, textAlign: 'center' }}>
      <Button sx={{ margin: 2 }}>Cadastrar Cliente</Button>

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
          return <SingleClient key={index} client={client} />;
        })}
      </Grid2>
    </Container>
  );
}
