import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeBtn = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51KCmJgKytctwLChMmRrwRTTp9wLnDkoTjAsF8tsXvvQGFtwxe7ZRUbwIm10cW1Zjb6qalCGzyMazTHEFoai9nd4200r0Q3OACx";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  
  return (
    <StripeCheckout
      label="Pay"
      name="Royal Clothing Ltd."
      billingAddress
      shippingAddress
      // image="https://svgshare.com/i/CUz.svg"
      image="https://svgshare.com/i/osm.svg"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeBtn;
