import React from "react";
import { Container, Row } from "react-bootstrap";
import Loading from "../Loading/Loading";
import Producto from '../Producto/Producto';


export default function Productos(props) {
  
    const { listaProductos:{loading, result, error} } = props;

    console.log(result);
 
    return (
        <Container>
            <Row >
                {loading || !result ? (
                    <Loading />
                ) : 
                    result.map(producto => (
                        <Producto key={producto.id} producto={ producto} />
                ))}
            </Row>
        </Container>
    );
}
