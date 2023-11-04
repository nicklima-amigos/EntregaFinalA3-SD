import { Button } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Link } from 'react-router-dom';

export function SingleProduct({ product, handleDelete }) {
    const { id, name, brand, price, quantity } = product;
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
                xs={4}
            >
                {name}
            </Grid2>
            <Grid2
                sx={{
                    borderBottom: 'solid 1px black',
                    marginTop: 1,
                }}
                xs={4}
            >
                {brand}
            </Grid2>
            <Grid2
                sx={{
                    borderBottom: 'solid 1px black',
                    marginTop: 1,
                }}
                xs={4}
            >
                {price}
            </Grid2>
            <Grid2
                sx={{
                    borderBottom: 'solid 1px black',
                    marginTop: 1,
                }}
                xs={4}
            >
                {quantity}
            </Grid2>
            <Grid2 sx={{ borderBottom: 'solid 1px black' }} xs={2}>
                <Link to={`/produtos/atualizar/${id}`}>
                    <Button sx={{ margin: 'auto' }}>Editar</Button>
                </Link>
            </Grid2>
            <Grid2
                sx={{
                    borderBottom: 'solid 1px black',
                }}
                xs={2}
            >
                <Button color='error' onClick={handleDelete}>
                    Excluir
                </Button>
            </Grid2>
        </Grid2>
    );
}
