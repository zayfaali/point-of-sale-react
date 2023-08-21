import React, { useEffect, useContext } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../Title/Title";
import { OrderContext } from "../../context/orders.context";

function preventDefault(event) {
  event.preventDefault();
}

const Orders = () => {
  const { orders, getOrders } = useContext(OrderContext);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  useEffect(() => {
    getOrders();
  }, []);

  console.log("the orders are ", orders);

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Order ID</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell>
                {typeof order.date === "string"
                  ? new Date(order.date).toLocaleDateString("en-US", options)
                  : ""}
              </TableCell>
              <TableCell>{order._id}</TableCell>
              <TableCell>VISA ⠀•••• 4242</TableCell>
              <TableCell align="right">{`$${order.totalPrice}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
};

export default Orders;
