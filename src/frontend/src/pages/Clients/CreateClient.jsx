import { Typography } from '@mui/material';
import { ClientForm } from '../../components/forms/Client';
import { clientService } from '../../service/clients';
import { useNavigate } from 'react-router-dom';

export function CreateClient() {
  const navigate = useNavigate();

  const handleSubmit = async (client) => {
    await clientService.createClient(client);
    navigate('/clientes');
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
