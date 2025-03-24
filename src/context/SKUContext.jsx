import { createContext, useState } from "react";

export const SKUContext = createContext();

export const SKUProvider = ({ children }) => {
  const [skus, setSkus] = useState([
    { id: 1, name: "SKU 1", price: 100 },
    { id: 2, name: "SKU 2", price: 200 },
  ]);

  const addSKU = (newSKU) => {
    setSkus([...skus, { id: skus.length + 1, ...newSKU }]);
  };

  const updateSKU = (id, updatedSKU) => {
    setSkus(skus.map((sku) => (sku.id === id ? updatedSKU : sku)));
  };

  return (
    <SKUContext.Provider value={{ skus, addSKU, updateSKU }}>
      {children}
    </SKUContext.Provider>
  );
};
