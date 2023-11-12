import { Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { SaleForm } from "../../components/forms/Sale";
import { useSales } from "../../hooks/useSales";
import { saleService } from "../../service/sales";

export function UpdateSale() {
  const { id } = useParams();
  const { sales } = useSales(id);
  const navigate = useNavigate();

  const handleSubmit = async (sale) => {
    await saleService.updateSale(id, sale);
    navigate("/vendas");
  };

  return (
    <>
      {sales.length > 0 && (
        <>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", fontSize: 30, margin: 2 }}
          >
            Editar venda
          </Typography>
          <SaleForm sale={sales[0]} handleSubmit={handleSubmit} />
        </>
      )}
    </>
  );
}
