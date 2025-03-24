import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [stores, setStores] = useState([]);

  return (
    <StoreContext.Provider value={{ stores, setStores }}>
      {children}
    </StoreContext.Provider>
  );
};
