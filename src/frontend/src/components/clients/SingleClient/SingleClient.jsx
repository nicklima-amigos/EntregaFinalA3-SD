import { Box, Button } from '@mui/material';

export function SingleClient({ client }) {
  const { id, name, created_at } = client;
  const createdAt = new Date(created_at).toUTCString('PT-Br');
  return (
    <Box
      key={id}
      sx={{
        width: 1,
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
      }}
    >
      <Box sx={{ width: '30%', borderBottom: 'solid 1px black' }}>{name}</Box>
      <Box sx={{ width: '30%', borderBottom: 'solid 1px black' }}>
        {createdAt}
      </Box>
      <Box sx={{ width: '20%', borderBottom: 'solid 1px black' }}>
        {' '}
        <Button>Editar</Button>{' '}
      </Box>
      <Box sx={{ width: '20%', borderBottom: 'solid 1px black' }}>
        {' '}
        <Button>Excluir</Button>{' '}
      </Box>
    </Box>
  );
}
