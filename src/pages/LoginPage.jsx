import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const Navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    axios.post("http://localhost:3009/login", body).then(({ data }) => {
      console.log(data.accessToken);
      localStorage.setItem("userToken", data.accessToken);
      localStorage.setItem("Email", JSON.stringify(data.user.email));
    });
    if (cart.length > 0) {
      Navigate("/checkout");
    } else {
      Navigate("/");
    }
  };
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
};

export default LoginPage;
