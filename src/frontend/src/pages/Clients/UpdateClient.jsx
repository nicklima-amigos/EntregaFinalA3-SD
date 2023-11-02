import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ClientForm } from '../../components/forms/Client';
import { useClients } from '../../hooks/useClients';

export function UpdateClient() {
  const { id } = useParams();
  const { clients, updateClient } = useClients(id);

  const handleSubmit = (clientInfo) => {
    return (e) => {
      e.preventDefault();
      updateClient(id, clientInfo);
    };
  };

  return (
    <>
      {clients.length > 0 && (
        <>
          <Typography
            variant='h3'
            sx={{ textAlign: 'center', fontSize: 30, margin: 2 }}
          >
            Editando informações de {clients[0].name}
          </Typography>
          <ClientForm handleSubmit={handleSubmit} client={clients[0]} />
        </>
      )}
    </>
  );
}
