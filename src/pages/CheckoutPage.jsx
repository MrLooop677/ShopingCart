import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { isLogged } = useAuth();
  const Navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) {
      Navigate("/login");
    }
  }, [isLogged]);
  return <div>checkout</div>;
};

export default CheckoutPage;
