import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';

export function ClientForm({ client, handleSubmit }) {
  const [name, setName] = useState(client?.name || '');
  return (
    <form action='' onSubmit={handleSubmit({ name })}>
      <Grid2 xs={12} sx={{ textAlign: 'center' }}>
        <TextField
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          label='Nome'
        />
      </Grid2>
      <Grid2 xs={12} sx={{ textAlign: 'center' }}>
        <Button type='submit'>Salvar</Button>
      </Grid2>
    </form>
  );
}
