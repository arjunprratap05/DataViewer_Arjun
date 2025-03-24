import React, { useState, useContext } from "react";
import { SKUContext } from "../context/SKUContext";
import { TextField, Button } from "@mui/material";

const SKUForm = () => {
  const { skus, setSkus } = useContext(SKUContext);
  const [skuName, setSkuName] = useState("");
  const [price, setPrice] = useState("");

  const addSKU = () => {
    if (skuName.trim() && price.trim()) {
      setSkus([
        ...skus,
        { id: Date.now(), name: skuName, price: parseFloat(price) },
      ]);
      setSkuName("");
      setPrice("");
    }
  };

  return (
    <div>
      <TextField
        label="SKU Name"
        value={skuName}
        onChange={(e) => setSkuName(e.target.value)}
      />
      <TextField
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Button variant="contained" onClick={addSKU}>
        Add SKU
      </Button>
    </div>
  );
};

export default SKUForm;
