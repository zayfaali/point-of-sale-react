import { createContext, useState, useContext } from "react";
import { StoreContext } from "./stores.context";

const host = "http://localhost:5000";

export const ItemContext = createContext({
  items: [],
  setItems: () => null,
  allItems: [],
  setAllItems: () => null,
});

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const { currentStore } = useContext(StoreContext);

  //ADD ITEMS
  const addItem = async (
    itemStoreID,
    itemName,
    itemDesc,
    itemPic,
    itemPrice
  ) => {
    const apiUrl = `${host}/api/item/additem`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemStoreID,
          itemName,
          itemDesc,
          itemPic,
          itemPrice,
        }),
      });

      const newItem = await response.json();

      // Update the state using the functional form of the setItems
      setItems([...items, newItem]);
    } catch (error) {
      console.error(error);
    }
  };

  // GET ITEMS FOR THE SPECIFIC STORE
  const getItems = async (storeid) => {
    // API Call
    const apiUrl = `${host}/api/item/store/${storeid}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const itemsMap = await response.json();
    console.log(itemsMap);
    setItems(itemsMap);
  };

  // GET ALL ITEMS

  const getAllItems = async (sortingString) => {
    // API Call
    const apiUrl = `${host}/api/item/getallitems`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sortingString }),
    });

    const AllItemsMap = await response.json();
    console.log("all items are", AllItemsMap);
    setAllItems(AllItemsMap);
  };

  const value = {
    items,
    setItems,
    addItem,
    getItems,
    allItems,
    setAllItems,
    getAllItems,
  };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};
