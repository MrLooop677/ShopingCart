import axios from "axios";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { addToCart } from "../state/productSlice";
const HomePage = () => {
  const { data: products } = useLoaderData();
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150/92c952"
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>{product.price}</Card.Text>
                  <Card.Text>{product.category}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export const HomePageLoader = () => {
  const data = axios.get("http://localhost:3009/products");
  return data;
};
export default HomePage;
