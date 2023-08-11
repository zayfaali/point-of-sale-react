import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ClearIcon from "@mui/icons-material/Clear";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CheckOutTable = () => {
  const { cartItems, addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="right">Add</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Remove</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Clear</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((cartItem) => (
            <StyledTableRow key={cartItem._id}>
              <StyledTableCell component="th" scope="row">
                <img
                  src={cartItem.itemPic}
                  alt={`${cartItem.itemName}`}
                  style={{
                    maxWidth: "100px", // Adjust this value as needed
                    maxHeight: "100px", // Adjust this value as needed
                  }}
                />
              </StyledTableCell>
              <StyledTableCell align="left">
                {cartItem.itemName}
              </StyledTableCell>
              <StyledTableCell
                onClick={() => removeItemFromCart(cartItem)}
                align="right"
              >
                <ArrowBackIosNewIcon
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                {cartItem.quantity}
              </StyledTableCell>
              <StyledTableCell
                onClick={() => addItemToCart(cartItem)}
                align="right"
              >
                <ArrowForwardIosIcon
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                {cartItem.quantity * cartItem.itemPrice}
              </StyledTableCell>
              <StyledTableCell
                onClick={() => clearItemFromCart(cartItem)}
                align="right"
              >
                <ClearIcon
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CheckOutTable;
