import { CircularProgress, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductForm } from '../../components/forms/Product';
import { useSingleProduct } from '../../hooks/useSingleProduct';
import { productService } from '../../service/products';

export function UpdateProduct() {
  const { id } = useParams();
  const { product } = useSingleProduct(id);
  const navigate = useNavigate();

  const handleSubmit = async (product) => {
    await productService.updateProduct(id, product);
    navigate('/produtos');
  };

  if (!product) {
    return <CircularProgress />;
  }

  return (
    <>
      <Typography
        variant='h3'
        sx={{ textAlign: 'center', fontSize: 30, margin: 2 }}
      >
        Editar produto
      </Typography>
      <ProductForm product={product} handleSubmit={handleSubmit} />
    </>
  );
}
