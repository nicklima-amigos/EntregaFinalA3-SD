import { Button, Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { grey } from '@mui/material/colors';
import { SingleSale } from '../../components/sales/SingleSale/SingleSale';
import { useSales } from '../../hooks/useSales';
import { Link } from 'react-router-dom';
import { saleService } from '../../service/sales';

export function Sales() {
  const { sales, setSales } = useSales(null, true);

  const handleDelete = (saleId) => {
    return async () => {
      await saleService.deleteSale(saleId);
      setSales(sales.filter((sale) => sale.id !== saleId));
    };
  };

  return (
    <Container sx={{ maxWidth: 1000, textAlign: 'center' }}>
      <Link to='/vendas/cadastrar'>
        <Button sx={{ margin: 2 }}>Cadastrar Venda</Button>
      </Link>

      <Grid2
        container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '1000px',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <Grid2
          container
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: 2,
            borderBottom: 'solid 1px black',
            backgroundColor: grey[200],
            borderRadius: 2,
            borderEndEndRadius: 0,
            borderEndStartRadius: 0,
          }}
          xs={12}
        >
          <Grid2 xs={2}>Quantidade:</Grid2>
          <Grid2 xs={2}>Produto:</Grid2>
          <Grid2 xs={2}>Preço:</Grid2>
          <Grid2 xs={2}>Total:</Grid2>
          <Grid2 xs={2}>Cliente:</Grid2>
          <Grid2 xs={1}></Grid2>
          <Grid2 xs={1}></Grid2>
        </Grid2>
        {sales.map((sale, index) => {
          return (
            <SingleSale
              key={index}
              sale={sale}
              handleDelete={handleDelete(sale.id)}
            />
          );
        })}
      </Grid2>
    </Container>
  );
}
