import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { Button, TextField, List, ListItem, ListItemText } from "@mui/material";

const StorePage = () => {
  const { stores, setStores } = useContext(StoreContext);
  const [newStore, setNewStore] = useState("");

  const addStore = () => {
    if (newStore.trim()) {
      setStores([...stores, { id: Date.now(), name: newStore }]);
      setNewStore("");
    }
  };

  return (
    <div>
      <h2>Manage Stores</h2>
      <TextField
        label="New Store"
        value={newStore}
        onChange={(e) => setNewStore(e.target.value)}
      />
      <Button onClick={addStore}>Add Store</Button>
      <List>
        {stores.map((store) => (
          <ListItem key={store.id}>
            <ListItemText primary={store.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default StorePage;
