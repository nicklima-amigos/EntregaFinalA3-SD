import { Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ClientForm } from '../../components/forms/Client';
import { useSingleClient } from '../../hooks/useSingleClient';
import { clientService } from '../../service/clients';

export function UpdateClient() {
  const { id } = useParams();
  const { client } = useSingleClient(id);
  const navigate = useNavigate();

  const handleSubmit = async (client) => {
    await clientService.updateClient(id, client);
    navigate('/clientes');
  };

  if (!client) {
    return <Typography variant='h3'>Carregando...</Typography>;
  }

  return (
    <>
      <Typography
        variant='h3'
        sx={{ textAlign: 'center', fontSize: 30, margin: 2 }}
      >
        Editando informações de {client.name}
      </Typography>
      <ClientForm handleSubmit={handleSubmit} client={client} />
    </>
  );
}
