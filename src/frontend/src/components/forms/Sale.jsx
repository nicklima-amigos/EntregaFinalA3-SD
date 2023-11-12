import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { TextField, Button } from "@mui/material";
import { useState } from "react";

export function SaleForm({ sale, handleSubmit }) {
  const [quantity, setQuantity] = useState(sale?.quantity || "");
  const [quantityIsValid, setQuantityIsValid] = useState(true);

  const formIsValid = () => {
    if (quantity.length < 0) {
      setQuantityIsValid(false);
      return false;
    }
    return true;
  };

  return (
    <form
      action=""
      onSubmit={async (e) => {
        e.preventDefault();
        if (formIsValid()) {
          await handleSubmit({ quantity });
        }
      }}
    >
      <Grid2 xs={12} sx={{ textAlign: "center" }}>
        <TextField
          quantity="quantity"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          label="Quantidade"
          error={!quantityIsValid}
          helperText={quantityIsValid ? "" : "Quantidade deve ser negativo"}
        />
      </Grid2>
      <Grid2 xs={12} sx={{ textAlign: "center" }}>
        <Button type="submit">Salvar</Button>
      </Grid2>
    </form>
  );
}
