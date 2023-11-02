import { Typography } from '@mui/material';
import { ClientForm } from '../../components/forms/Client';
import { useClients } from '../../hooks/useClients';

export function CreateClient() {
  const { createClient } = useClients();

  const handleSubmit = (client) => {
    return (e) => {
      e.preventDefault();
      createClient(client);
    };
  };
  return (
    <>
      <Typography
        variant='h3'
        sx={{ textAlign: 'center', fontSize: 30, margin: 2 }}
      >
        Cadastrar novo cliente
      </Typography>
      <ClientForm handleSubmit={handleSubmit} />
    </>
  );
}
