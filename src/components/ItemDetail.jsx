import Button from "@restart/ui/esm/Button";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import ItemCount from "./ItemCount";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopCartContext } from "../context/CartContext";

const ItemDetail = ({id, pictureUrl, title, description, price, stock }) => {

    const [buy, setBuy] = useState(false)
    const {onAdd} = useContext(ShopCartContext)

    const agregar = (props) =>{
        setBuy(true)
        alert(`agregaste ${props.qty} al carro`)
        onAdd({id, title, price, pictureUrl}, props.qty)
    }
    
    return(
        <>
            
            <Container>
                <hr />
                <Row>
                    <Col>
                        <img src={pictureUrl} width="100%"  alt={title} />
                    </Col>
                    <Col className="text-center">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <h3>${price}</h3>
                        {!buy ? <ItemCount stock={stock} onAdd={agregar}/> : <Link to='/cart'><Button>Terminar Compra</Button></Link>}
                    </Col>
                </Row>
            </Container>
        </>
    );   
}

export default ItemDetail;