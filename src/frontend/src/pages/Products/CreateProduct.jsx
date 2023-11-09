import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ProductForm } from "../../components/forms/Product";
import { productService } from "../../service/products";

export function CreateProduct() {
  const navigate = useNavigate();

  const handleSubmit = async (product) => {
    await productService.createProduct(product);
    navigate("/produtos");
  };

  return (
    <>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontSize: 30, margin: 2 }}
      >
        Cadastrar novo produto
      </Typography>
      <ProductForm handleSubmit={handleSubmit} />
    </>
  );
}
