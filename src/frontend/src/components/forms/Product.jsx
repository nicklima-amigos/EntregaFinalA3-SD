import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export function ProductForm({ product, handleSubmit }) {

    const [name, setName] = useState(product?.name || '');
    const [brand, setBrand] = useState(product?.brand || '');
    const [price, setPrice] = useState(product?.price || '');
    const [quantity, setQuantity] = useState(product?.quantity || '');

    const formIsValid = () => {
        if (name.length < 3 || brand < 3 || price < 0.01 || quantity < 0) {
            return false;
        }
        return true;
    };

    return (

        <form
            action=""
            onSubmit={async (e) => {
                e.preventDefault()
                if (formIsValid()) {
                    await handleSubmit({ name, brand, price, quantity });
                }
            }}>


            <Grid2 xs={12} sx={{ textAlign: 'center' }}>
                <TextField
                    name='name'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    label='Nome'
                    error={!formIsValid}
                    helperText={formIsValid ? '' : 'Nome deve ter no mínimo 3 caracteres'}
                />
                <TextField
                    name='brand'
                    value={brand}
                    onChange={(e) => {
                        setBrand(e.target.value);
                    }}
                    label='Marca'
                    error={!formIsValid}
                    helperText={formIsValid ? '' : 'Marca deve ter no mínimo 3 caracteres'}
                />
                <TextField
                    name='price'
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                    label='Preço'
                    error={!formIsValid}
                    helperText={formIsValid ? '' : 'Preço deve ser no minimo R$ 0,01'}
                />
                <TextField
                    name='quantity'
                    value={quantity}
                    onChange={(e) => {
                        setQuantity(e.target.value);
                    }}
                    label='Quantidade'
                    error={!formIsValid}
                    helperText={formIsValid ? '' : 'Quantidade não pode ser negativa'}
                />
            </Grid2>
            <Grid2 xs={12} sx={{ textAlign: 'center' }}>
                <Button type='submit'>Salvar</Button>
            </Grid2>

        </form>

    )

}