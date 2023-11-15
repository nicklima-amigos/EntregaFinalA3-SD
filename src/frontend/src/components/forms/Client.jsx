import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';

export function ClientForm({ client, handleSubmit }) {
  const [name, setName] = useState(client?.name || '');
  const [nameIsValid, setNameIsValid] = useState(true);

  const formIsValid = () => {
    if (name.length < 3) {
      setNameIsValid(false);
      return false;
    }
    return true;
  };

  return (
    <form
      action=''
      onSubmit={async (e) => {
        e.preventDefault();
        if (formIsValid()) {
          await handleSubmit({ name });
        }
      }}
    >
      <Grid2 xs={12} sx={{ textAlign: 'center' }}>
        <TextField
          name='name'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          label='Nome'
          error={!nameIsValid}
          helperText={nameIsValid ? '' : 'Nome deve ter no mínimo 3 caracteres'}
        />
      </Grid2>
      <Grid2 xs={12} sx={{ textAlign: 'center' }}>
        <Button type='submit'>Salvar</Button>
      </Grid2>
    </form>
  );
}
