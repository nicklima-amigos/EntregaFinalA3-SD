import { Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { SaleForm } from '../../components/forms/Sale';
import { useSingleSale } from '../../hooks/useSingleSale';
import { saleService } from '../../service/sales';

export function UpdateSale() {
  const { id } = useParams();
  const { sale } = useSingleSale(id);
  const navigate = useNavigate();

  const handleSubmit = async (sale) => {
    await saleService.updateSale(id, sale);
    navigate('/vendas');
  };

  return (
    <>
      {sale && (
        <>
          <Typography
            variant='h3'
            sx={{ textAlign: 'center', fontSize: 30, margin: 2 }}
          >
            Editar venda
          </Typography>
          <SaleForm sale={sale} handleSubmit={handleSubmit} />
        </>
      )}
    </>
  );
}
