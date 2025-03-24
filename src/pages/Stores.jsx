import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import StoreForm from "../components/StoreForm";
import { List, ListItem, ListItemText, Button } from "@mui/material";

const Stores = () => {
  const { stores, setStores } = useContext(StoreContext);

  const removeStore = (id) => {
    setStores(stores.filter((store) => store.id !== id));
  };

  return (
    <div>
      <StoreForm />
      <List>
        {stores.map((store) => (
          <ListItem key={store.id}>
            <ListItemText primary={store.name} />
            <Button color="error" onClick={() => removeStore(store.id)}>
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Stores;
