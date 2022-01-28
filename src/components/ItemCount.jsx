import React, {useState} from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

const ItemCount = (props) =>{
    const [stock, setStock] = useState(props.stock)
    const [qty, setQty] = useState(0)

    const removeItem = () => {}

    const changeQty = (add) => {
        if(add){
            if(stock > 0){
                setQty(qty +1)
                setStock(stock -1)
            }
        } else if(qty > 1){
            setQty(qty -1)
            setStock(stock +1)
        } else {
            removeItem()
        }
    }

    return(
        <Container>
            <Row>
                <Row>
                    <Col><button onClick={() => changeQty(false)}>-</button></Col>
                    <Col><p>{qty}</p></Col>
                    <Col><button onClick={() => changeQty(true)}>+</button></Col>
                </Row>
                <div>
                    <p>Stock Disponible {stock}</p>
                </div>
                <div>
                    <button onClick={()=>props.onAdd({qty})}>agregar al carrito</button>
                </div>
            </Row>
        </Container>
    )

}

export default ItemCount;