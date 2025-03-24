import React, { useState, useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { TextField, Button } from "@mui/material";

const StoreForm = () => {
  const { stores, setStores } = useContext(StoreContext);
  const [storeName, setStoreName] = useState("");

  const addStore = () => {
    if (storeName.trim()) {
      setStores([...stores, { id: Date.now(), name: storeName }]);
      setStoreName("");
    }
  };

  return (
    <div>
      <TextField
        label="New Store"
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
      />
      <Button variant="contained" onClick={addStore}>
        Add Store
      </Button>
    </div>
  );
};

export default StoreForm;
