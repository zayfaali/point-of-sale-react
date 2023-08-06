import { useContext } from "react";
import { useState, createContext } from "react";
import { AdminContext } from "./admin.context";

const host = "https://62hcd7-5000.csb.app/";

export const StoreContext = createContext({
  stores: [],
  setStores: () => null,
});

export const StoreProvider = ({ children }) => {
  const [stores, setStores] = useState([]);
  const { currentAdmin } = useContext(AdminContext);

  //ADD A STORE

  // Add a Note
  const addStore = async (storeName, storeDesc, storePic, storeLocation) => {
    // TODO: API Call
    // API Call
    const apiUrl = `${host}/api/stores/addstore`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": currentAdmin,
      },
      body: JSON.stringify({ storeName, storeDesc, storePic, storeLocation }),
    });

    const store = await response.json();
    console.log(store);
    setStores(stores.concat(store));
  };

  const getStores = async () => {
    // API Call
    const apiUrl = `${host}/api/stores/getstores`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": currentAdmin,
      },
    });

    const stores = await response.json();
    console.log(stores);
    setStores(stores);
  };

  const value = {
    stores,
    setStores,
    addStore,
    getStores,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
