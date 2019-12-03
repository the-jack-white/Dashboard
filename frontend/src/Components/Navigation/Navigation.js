import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; 

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand as={Link} to="/home">
                <svg width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 80"><g fill="#000" data-name="Outline Icon"><path d="M61.694,31.281l-29-28a1,1,0,0,0-1.388,0l-29,28a1,1,0,1,0,1.388,1.438L32,5.39,60.306,32.719a1,1,0,1,0,1.388-1.438Z"/><path d="M54,33a1,1,0,0,0-1,1V59H11V34a1,1,0,0,0-2,0V60a1,1,0,0,0,1,1H54a1,1,0,0,0,1-1V34A1,1,0,0,0,54,33Z"/><path d="M24.9,36h4.424l3.748,9.372A1,1,0,0,0,34,46h5.1a5,5,0,1,0,0-2H34.677l-3.748-9.372A1,1,0,0,0,30,34H24.9a5,5,0,1,0,0,2ZM44,42a3,3,0,1,1-3,3A3,3,0,0,1,44,42ZM17,35a3,3,0,1,1,3,3A3,3,0,0,1,17,35Z"/></g></svg>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Dashboard</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Devices" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">New Device</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">All Devices</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Remove Device</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;