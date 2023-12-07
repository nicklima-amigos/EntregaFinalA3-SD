import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useClients } from '../../hooks/useClients';
import { useProducts } from '../../hooks/useProducts';

export function SaleForm({ sale, handleSubmit }) {
  const [quantity, setQuantity] = useState(sale?.quantity || 0);
  const [quantityIsValid, setQuantityIsValid] = useState(true);
  const [client, setClient] = useState(sale?.client.id || '');
  const [clientIsValid, setClientIsValid] = useState(true);
  const [product, setProduct] = useState(sale?.product.id || '');
  const [productIsValid, setProductIsValid] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [formError, setFormError] = useState('');
  const { clients } = useClients();
  const { products } = useProducts();

  const formIsValid = () => {
    setFormError('');
    setQuantityIsValid(true);
    setClientIsValid(true);
    setProductIsValid(true);
    let errors = 0;
    if (quantity.length < 0) {
      setQuantityIsValid(false);
      errors++;
    }
    if (client.length === 0) {
      setClientIsValid(false);
      errors++;
    }
    if (product.length === 0) {
      setProductIsValid(false);
      errors++;
    }
    return errors === 0;
  };

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id === product);
    if (!selectedProduct) {
      return;
    }
    const calculatedTotal = selectedProduct.price * quantity;
    setTotalPrice(calculatedTotal.toFixed(2));
    return;
  }, [product, quantity, products]);

  return (
    <form
      action=''
      onSubmit={async (e) => {
        e.preventDefault();
        if (formIsValid()) {
          try {
            await handleSubmit({
              product_id: product,
              quantity,
              client_id: client,
            });
          } catch (e) {
            if (e.status === 422) {
              setFormError('Não há estoque suficiente para este produto');
            }
          }
        }
      }}
    >
      <Grid2 container xs={12}>
        <Grid2 xs={4} sx={{ textAlign: 'center' }}>
          <FormControl fullWidth>
            <InputLabel>Cliente</InputLabel>
            <Select
              label='Cliente'
              sx={{ width: '100%' }}
              onChange={(e) => setClient(e.target.value)}
              value={client}
              error={!clientIsValid}
            >
              {clients.map(({ id, name }) => {
                return (
                  <MenuItem value={id} key={id}>
                    {name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 xs={4} sx={{ textAlign: 'center' }}>
          <TextField
            quantity='quantity'
            value={quantity}
            onChange={(e) => {
              if (!isNaN(e.target.value)) {
                setQuantity(parseInt(e.target.value));
              } else {
                setQuantity(0);
              }
            }}
            label='Quantidade'
            error={!quantityIsValid}
            helperText={
              quantityIsValid ? '' : 'Quantidade não pode ser negativo'
            }
          />
        </Grid2>
        <Grid2 xs={4} sx={{ textAlign: 'center' }}>
          <FormControl fullWidth>
            <InputLabel>Produto</InputLabel>
            <Select
              label='Produto'
              sx={{ width: '100%' }}
              onChange={(e) => setProduct(e.target.value)}
              value={product}
              error={!productIsValid}
            >
              {products.map(({ id, name, price }) => {
                return (
                  <MenuItem value={id} key={id}>
                    {name} - R$ {price}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 xs={12} sx={{ textAlign: 'center' }}>
          <Typography color='error' hidden={!formError}>
            {formError}
          </Typography>
          <p>Total: R$ {totalPrice}</p>
          <Button type='submit'>Salvar</Button>
        </Grid2>
      </Grid2>
    </form>
  );
}
