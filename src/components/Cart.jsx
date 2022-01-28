import React, {useContext} from "react";
import { ShopCartContext } from "../context/CartContext";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import CartItem from "./CartItem";


const Cart = () => {

    const {cart, total, removeItem, changeQty, clear} = useContext(ShopCartContext)
    console.log(cart)

    return(
        <>
        <Container>
            <Container>
                <h3>Carrito de Compras</h3>
            </Container>
            {cart.map(e => {
                return <CartItem
                        key={e.id}
                        pictureUrl={e.pictureUrl}
                        title={e.title}
                        price={e.price}
                        subTotal={e.subTotal}
                        removeItem={removeItem}
                        changeQty={changeQty}
                        cantidad={e.cantidad}
                    />
            
            })}
            <Col><Button  onClick={() => clear()}>Limpiar carrito</Button></Col>
            <Container className="carroTotal">
                <Col>
                    <Row>
                        <h5>Carrito Total: $ {total}</h5>
                    </Row>
                    <Row>
                        <Button>Comprar</Button>
                    </Row>
                </Col>
            </Container>
        </Container>
    </>)
   
}

export default Cart;