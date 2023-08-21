import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ cartItems, cartTotal }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    async function createPaymentIntent() {
      try {
        const response = await fetch(
          "http://localhost:5000/api/payments/create-payment-intent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ total: cartTotal }),
          }
        );

        const data = await response.json();

        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error creating payment intent:", error);
      }
    }

    createPaymentIntent();
  }, [cartItems]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    try {
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );

      if (error) {
        console.error("Payment failed:", error.message);
        navigate("/checkout-failed");
      } else {
        console.log("Payment successful:", paymentIntent);
        navigate("/checkout-success");
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error processing payment:", error);
      setIsLoading(false);
    }
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <FormControl
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FormLabel>Card details</FormLabel>
        <CardElement />
      </FormControl>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          disabled={!stripe || isLoading}
          startIcon={isLoading && <CircularProgress size={20} />}
        >
          Pay
        </Button>
      </div>
    </Box>
  );
};

export default PaymentForm;
