import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import styled from '@emotion/styled';

const Grid2Centralized = styled(Grid2)`
  .MuiFormControl-root {
    margin: auto;
    margin-top: 10px;
  }
`;

export function ProductForm({ product, handleSubmit }) {
  const [name, setName] = useState(product?.name || '');
  const [nameIsValid, setNameIsValid] = useState(true);
  const [brand, setBrand] = useState(product?.brand || '');
  const [brandIsValid, setBrandIsValid] = useState(true);
  const [price, setPrice] = useState(product?.price || 0);
  const [priceIsValid, setPriceIsValid] = useState(true);
  const [quantity, setQuantity] = useState(product?.quantity || 0);
  const [quantityIsValid, setQuantityIsValid] = useState(true);

  const formIsValid = () => {
    setNameIsValid(true);
    setBrandIsValid(true);
    setPriceIsValid(true);
    setQuantityIsValid(true);
    let errors = 0;
    if (name.length < 2) {
      setNameIsValid(false);
      errors++;
    }
    if (brand.length < 2) {
      setBrandIsValid(false);
      errors++;
    }
    if (price <= 0) {
      setPriceIsValid(false);
      errors++;
    }
    if (quantity < 0) {
      setQuantityIsValid(false);
      errors++;
    }
    return errors === 0;
  };

  return (
    <form
      action=''
      onSubmit={async (e) => {
        e.preventDefault();
        if (formIsValid()) {
          await handleSubmit({ name, brand, price, quantity });
        }
      }}
    >
      <Grid2Centralized
        container
        xs={4}
        sx={{ textAlign: 'center', margin: 'auto' }}
      >
        <TextField
          name='name'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          label='Nome'
          error={!nameIsValid}
          helperText={nameIsValid ? '' : 'Nome deve ter no mínimo 3 caracteres'}
        />
        <TextField
          name='brand'
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
          label='Marca'
          error={!brandIsValid}
          helperText={
            brandIsValid ? '' : 'Marca deve ter no mínimo 3 caracteres'
          }
        />
        <TextField
          name='price'
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          label='Preço'
          error={!priceIsValid}
          helperText={priceIsValid ? '' : 'Preço não pode ser zero ou negativo'}
        />
        <TextField
          name='quantity'
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          label='Quantidade'
          error={!quantityIsValid}
          helperText={quantityIsValid ? '' : 'Quantidade não pode ser negativa'}
        />
      </Grid2Centralized>
      <Grid2 xs={12} sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Button type='submit'>Salvar</Button>
      </Grid2>
    </form>
  );
}
