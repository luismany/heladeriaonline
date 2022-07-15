import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';



import './Producto.scss';

export default function Productos(props) {
    const { producto } = props;


    return (

        <Col xs={3} className="producto">
            <Card>
                <Card.Img variant='top' src={producto.image} />
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>{producto.extraInfo}</Card.Text>
                <Card.Text>{producto.price} $ / Unidad</Card.Text>
                <Button >Añadir al carrito</Button>
            </Card>
        </Col>
    );
}