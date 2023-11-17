import { Button, Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { SingleProduct } from '../../components/products/SingleProduct/SingleProduct';
import { useProducts } from '../../hooks/useProducts';
import { productService } from '../../service/products';
import { reportService } from '../../service/reports';
import { useDownloadReport } from '../../hooks/useDownloadFile';

export function Products() {
  const { products, setProducts } = useProducts();
  const downloadDepleting = useDownloadReport('relatorio-estoque', () =>
    reportService.getDepletingProducts()
  );
  const downloadBestSellers = useDownloadReport('relatorio-mais-vendidos', () =>
    reportService.getBestSellers()
  );

  const handleDelete = (productId) => {
    return async () => {
      await productService.deleteProduct(productId);
      setProducts(products.filter((product) => product.id !== productId));
    };
  };

  return (
    <Container sx={{ maxWidth: 1000, textAlign: 'center' }}>
      <Link to='/produtos/cadastrar'>
        <Button sx={{ margin: 2 }}>Cadastrar Produtos</Button>
      </Link>
      <Button color='secondary' onClick={downloadBestSellers}>
        Produtos mais vendidos
      </Button>
      <Button color='secondary' onClick={downloadDepleting}>
        Produtos com baixo estoque
      </Button>

      <Grid2
        container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '800px',
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
          <Grid2 xs={2}>Nome:</Grid2>
          <Grid2 xs={2}>Marca:</Grid2>
          <Grid2 xs={2}>Preço:</Grid2>
          <Grid2 xs={2}>Quantidade:</Grid2>
          <Grid2 xs={2}></Grid2>
          <Grid2 xs={2}></Grid2>
        </Grid2>
        {products.map((product, index) => {
          return (
            <SingleProduct
              key={index}
              product={product}
              handleDelete={handleDelete(product.id)}
            />
          );
        })}
      </Grid2>
    </Container>
  );
}
