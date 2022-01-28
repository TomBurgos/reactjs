import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({id, pictureUrl, title, description, price}) => {
    return<>
            <Card style={{ width: '18rem' }} key={id}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>${price}</Card.Text>
                <Link to={`/itemDetail/${title}`} variant="primary">Ir al Producto</Link>
            </Card.Body>
            </Card>
    </>;
}

export default Item;