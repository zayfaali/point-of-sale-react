import { useContext } from "react";
import { useState, createContext } from "react";
import { AdminContext } from "./admin.context";

const host = "http://localhost:5000";

export const StoreContext = createContext({
  stores: [],
  setStores: () => null,
  currentStore: null,
  setCurrentStore: () => null,
  currentStoreDetails: {},
  setCurrentStoreDetails: () => null,
});

export const StoreProvider = ({ children }) => {
  const [stores, setStores] = useState([]);
  const [currentStore, setCurrentStore] = useState(null);
  const [currentStoreDetails, setCurrentStoreDetails] = useState({});
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
  // get current store details

  const getCurrentStoreDetails = async (storeid) => {
    // API Call
    const apiUrl = `${host}/api/stores/${storeid}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const storeDetails = await response.json();
    console.log(storeDetails);
    setCurrentStoreDetails(storeDetails);
  };

  const value = {
    stores,
    setStores,
    currentStore,
    setCurrentStore,
    currentStoreDetails,
    setCurrentStoreDetails,
    addStore,
    getStores,
    getCurrentStoreDetails,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
