import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../../asets/SVG/logo.svg';

import './TopMenu.scss';

export default function TopMenu() {
    
    return (

        <Navbar bg="dark" variant="dark" className="top-menu">
            <Container>
                <BrandNav />
              {/*<MenuNav />*/} 
            </Container>
        </Navbar>
    );

}

function BrandNav(){

    return (
        <Navbar.Brand>
            <Logo />
            <h2>La casa de los Helados</h2>
        </Navbar.Brand>
    );
}

function MenuNav() {
    
    return (
        <Nav className="mr-auto">
            <Nav.Link href="#">Aperitivos</Nav.Link>
            <Nav.Link href="#">Helados</Nav.Link>
            <Nav.Link href="#">Batidos</Nav.Link>
        </Nav>
    );
}