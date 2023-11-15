import { Typography } from "@mui/material";
import { SaleForm } from "../../components/forms/Sale";
import { saleService } from "../../service/sales";
import { useNavigate } from "react-router-dom";

export function CreateSale() {
  const navigate = useNavigate();

  const handleSubmit = async (sale) => {
    await saleService.createSale(sale);
    navigate("/vendas");
  };

  return (
    <>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontSize: 30, margin: 2 }}
      >
        Cadastrar nova venda
      </Typography>
      <SaleForm handleSubmit={handleSubmit} />
    </>
  );
}
