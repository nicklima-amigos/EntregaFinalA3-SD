import { Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ClientForm } from '../../components/forms/Client';
import { useClients } from '../../hooks/useClients';
import { clientService } from '../../service/clients';

export function UpdateClient() {
  const { id } = useParams();
  const { clients } = useClients(id);
  const navigate = useNavigate();

  const handleSubmit = (clientInfo) => {
    return async (e) => {
      e.preventDefault();
      await clientService.updateClient(id, clientInfo);
      navigate('/clientes');
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
