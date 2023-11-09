import { Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ProductForm } from "../../components/forms/Product";
import { useProducts } from "../../hooks/useProducts";
import { productService } from "../../service/products";

export function UpdateProduct() {
  const { id } = useParams();
  const { products } = useProducts(id);
  const navigate = useNavigate();

  const handleSubmit = async (product) => {
    await productService.updateProduct(id, product);
    navigate("/produtos");
  };

  return (
    <>
      {products.length > 0 && (
        <>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", fontSize: 30, margin: 2 }}
          >
            Editar produto
          </Typography>
          <ProductForm product={products[0]} handleSubmit={handleSubmit} />
        </>
      )}
    </>
  );
}
