import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'

const CartItem = ({ id, pictureUrl, title, price, subTotal, cantidad, changeQty, removeItem}) => {

  return (
    <>
        <React.Fragment>
            <Row key={id} id={id}>
                <Col><img src={pictureUrl} alt="..." width="100%" /></Col>
                <Col><h5>{title}</h5></Col>
                <Col><h5>${price}</h5></Col>
                <Col>
                    <Row className="buttom-ItemCount">
                        <Col><button onClick={() => changeQty(false, cantidad, title)}>-</button></Col>
                        <Col><p>{cantidad}</p></Col>
                        <Col><button onClick={() => changeQty(true, cantidad, title)}>+</button></Col>
                    </Row>
                </Col>
                <Col><h5>${subTotal}</h5></Col>
                <Col><Button onClick={() => removeItem(title)}>X</Button></Col>
            </Row>
        </React.Fragment>
    </>
)}

export default CartItem;