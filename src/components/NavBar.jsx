import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { useState } from 'react';
import { OffcanvasHeader, OffcanvasBody, OffcanvasTitle } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {

  const [visibleWithBothOptions, setVisibleWithBothOptions] = useState(false)

  return <>
          <Navbar sticky="top" expand={false}>
            <Container fluid>
              <Col md={4}>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas placement="start" scroll visible={visibleWithBothOptions} onHide={() => setVisibleWithBothOptions(false)}>
                  <OffcanvasHeader closeButton>
                    <OffcanvasTitle>Horny Store</OffcanvasTitle>
                  </OffcanvasHeader>
                  <OffcanvasBody>
                    <Nav className="justify-content-start flex-grow-1 pe-3">
                      <Nav.Link as={Link} to={"/"}>Inicio</Nav.Link>
                      <Nav.Link as={Link} to={"/productos"}>Productos</Nav.Link>
                      <Nav.Link as={Link} to={"/cart"}>Cart</Nav.Link>
                    </Nav>
                  </OffcanvasBody>
                </Navbar.Offcanvas>
              </Col>
           
              <Col md={5}>
                <Navbar.Brand href="/">
                  <img
                    src="img/horny_1.png"
                    alt="Horny Store"
                  />
                </Navbar.Brand>
              </Col>

              <Col md="auto">
              <CartWidget/>
              </Col>
     
            </Container>
          </Navbar>
  </>
}

export default NavBar;