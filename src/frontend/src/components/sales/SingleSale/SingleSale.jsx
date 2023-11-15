import { Button } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Link } from 'react-router-dom';

export function SingleSale({ sale, handleDelete }) {
  const { id, quantity, product_name, product_unit_price, client_name, total } =
    sale;

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
        xs={2}
      >
        {quantity}
      </Grid2>
      <Grid2
        sx={{
          borderBottom: 'solid 1px black',
          textAlign: 'center',
          marginTop: 1,
        }}
        xs={2}
      >
        {product_name}
      </Grid2>
      <Grid2
        sx={{
          borderBottom: 'solid 1px black',
          marginTop: 1,
        }}
        xs={2}
      >
        R$ {product_unit_price.toFixed(2)}
      </Grid2>
      <Grid2
        sx={{
          borderBottom: 'solid 1px black',
          marginTop: 1,
        }}
        xs={2}
      >
        R$ {total.toFixed(2)}
      </Grid2>
      <Grid2
        sx={{
          borderBottom: 'solid 1px black',
          marginTop: 1,
        }}
        xs={2}
      >
        {client_name}
      </Grid2>
      <Grid2 sx={{ borderBottom: 'solid 1px black' }} xs={1}>
        <Link to={`/vendas/atualizar/${id}`}>
          <Button sx={{ margin: 'auto' }}>Editar</Button>
        </Link>
      </Grid2>
      <Grid2
        sx={{
          borderBottom: 'solid 1px black',
        }}
        xs={1}
      >
        <Button color='error' onClick={handleDelete}>
          Excluir
        </Button>
      </Grid2>
    </Grid2>
  );
}
