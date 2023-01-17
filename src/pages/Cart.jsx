import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearItemes, deteteItem } from "../state/productSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.qty;
    return acc;
  }, 0);
  return (
    <>
      {cart.length ? (
        <Container className="py-5">
          <h2>Hello In Cart</h2>
          <Button variant="primary" onClick={() => dispatch(clearItemes())}>
            Clear Cart
          </Button>
          <h2>Total Price :${totalPrice.toFixed(2)}</h2>
          <Table
            striped
            bordered
            hover
            variant="dark"
            className="my-3 text-center"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Img</th>
                <th>Price</th>
                <th>Quntaty</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cart) => (
                <tr key={cart.id}>
                  <td>{cart.id}</td>
                  <td>{cart.title}</td>
                  <td>
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={cart.image}
                    />
                  </td>
                  <td>{cart.price}$</td>
                  <td>{cart.qty}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(deteteItem(cart.id))}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      ) : (
        <p>Please Enter Product to show Cart</p>
      )}
    </>
  );
};

export default Cart;
