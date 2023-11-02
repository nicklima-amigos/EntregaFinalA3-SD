import { Button } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { format } from 'date-fns';

export function SingleClient({ client }) {
  const { name, created_at } = client;
  const createdAt = format(new Date(created_at), 'dd/MM/yyyy');
  return (
    <Grid2
      container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
        marginBottom: 2,
      }}
      xs={12}
    >
      <Grid2
        sx={{
          borderBottom: 'solid 1px black',
          textAlign: 'center',
          marginTop: 1,
        }}
        xs={4}
      >
        {name}
      </Grid2>
      <Grid2
        sx={{
          borderBottom: 'solid 1px black',
          marginTop: 1,
        }}
        xs={4}
      >
        {createdAt}
      </Grid2>
      <Grid2 sx={{ borderBottom: 'solid 1px black' }} xs={2}>
        <Button sx={{ margin: 'auto' }}>Editar</Button>
      </Grid2>
      <Grid2
        sx={{
          borderBottom: 'solid 1px black',
        }}
        xs={2}
      >
        <Button color='error'>Excluir</Button>
      </Grid2>
    </Grid2>
  );
}
