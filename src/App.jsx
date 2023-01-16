import { Container } from "react-bootstrap";
import AppNav from "./components/AppNav";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <AppNav />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
