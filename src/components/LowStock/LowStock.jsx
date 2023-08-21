import React, { useContext, useEffect } from "react";
import { ItemContext } from "../../context/items.context";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../Title/Title";

const LowStock = () => {
  const { allItems, getAllItems } = useContext(ItemContext);
  useEffect(() => {
    getAllItems();
  }, []);
  console.log("all items of low stock are", allItems);
  return (
    <>
      <Title>LowStock</Title>
      <Table
        size="small"
        sx={{
          height: "max-content",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Item Name</TableCell>
            <TableCell>Stock Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allItems.map(
            (item) =>
              item.inStock < 90 && (
                <TableRow key={item._id}>
                  <TableCell>{item.itemName}</TableCell>
                  <TableCell>{item.inStock}</TableCell>
                </TableRow>
              )
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default LowStock;
