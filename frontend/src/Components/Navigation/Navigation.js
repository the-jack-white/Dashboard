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
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Devices" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">New Device</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">All Devices</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Remove Device</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Logout</Nav.Link>
                    <Nav.Link href="#memes">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 100 125"><g fill="#000" data-name="Outline Icon"><path d="M50,29.2c-11.5,0-20.8,9.3-20.8,20.8S38.5,70.8,50,70.8S70.8,61.5,70.8,50S61.5,29.2,50,29.2z M50,64.3     c-7.9,0-14.3-6.4-14.3-14.3S42.1,35.7,50,35.7S64.3,42.1,64.3,50S57.9,64.3,50,64.3z"/><path d="M91.3,37.2h-4.5c-0.5-1.5-1.1-2.9-1.8-4.2l3.1-3.1c1.2-1.2,1.8-2.7,1.8-4.4s-0.6-3.2-1.8-4.4l-9.2-9.2     c-2.4-2.4-6.5-2.4-8.8,0L67,14.9c-1.4-0.7-2.8-1.2-4.3-1.7V8.7c0-3.4-2.8-6.2-6.2-6.2H43.4c-3.4,0-6.2,2.8-6.2,6.2v4.5     c-1.5,0.5-2.9,1.1-4.2,1.8l-3.1-3.1c-2.4-2.4-6.5-2.4-8.8,0l-9.2,9.2c-1.2,1.2-1.8,2.7-1.8,4.4c0,1.7,0.6,3.2,1.8,4.4l3.2,3.2     c-0.7,1.4-1.2,2.8-1.7,4.2H8.7c-3.4,0-6.2,2.8-6.2,6.2v13.1c0,3.4,2.8,6.2,6.2,6.2h4.5c0.5,1.5,1.1,2.9,1.8,4.2l-3.1,3.1     c-1.2,1.2-1.8,2.7-1.8,4.4c0,1.7,0.6,3.2,1.8,4.4l9.2,9.2c2.4,2.4,6.5,2.4,8.8,0l3.2-3.2c1.4,0.7,2.8,1.2,4.3,1.7v4.4     c0,3.4,2.8,6.2,6.2,6.2h13.1c3.4,0,6.2-2.8,6.2-6.2v-4.5c1.5-0.5,2.9-1.1,4.2-1.8l3.1,3.1c2.4,2.4,6.5,2.4,8.8,0l9.2-9.2     c2.4-2.4,2.4-6.4,0-8.8L85.1,67c0.7-1.4,1.2-2.8,1.7-4.3h4.4c3.4,0,6.2-2.8,6.2-6.2V43.4C97.5,40,94.7,37.2,91.3,37.2z M91,56.2     h-6.6c-1.5,0-2.7,1-3.1,2.4c-0.7,2.6-1.7,5.1-3,7.4c-0.7,1.3-0.5,2.9,0.5,3.9l4.7,4.7l-8.9,8.9l-4.7-4.7c-1-1-2.6-1.2-3.9-0.5     c-2.3,1.3-4.8,2.3-7.3,3c-1.4,0.4-2.4,1.7-2.4,3.1V91H43.8v-6.6c0-1.5-1-2.7-2.4-3.1c-2.6-0.7-5.1-1.7-7.4-3     c-1.3-0.7-2.8-0.5-3.9,0.5l-4.7,4.7l-8.9-8.9l4.7-4.7c1-1,1.2-2.6,0.5-3.9c-1.3-2.3-2.3-4.8-3-7.3c-0.4-1.4-1.7-2.4-3.1-2.4H9     V43.8h6.6c1.5,0,2.7-1,3.1-2.4c0.7-2.6,1.7-5.1,3-7.4c0.7-1.3,0.5-2.8-0.5-3.9l-4.7-4.7l8.9-8.9l4.7,4.7c1,1,2.6,1.2,3.9,0.5     c2.3-1.3,4.8-2.3,7.3-3c1.4-0.4,2.4-1.7,2.4-3.1V9h12.6v6.6c0,1.5,1,2.7,2.4,3.1c2.6,0.7,5.1,1.7,7.4,3c1.3,0.7,2.9,0.5,3.9-0.5     l4.7-4.7l8.9,8.9l-4.7,4.7c-1,1-1.2,2.6-0.5,3.9c1.3,2.3,2.3,4.8,3,7.3c0.4,1.4,1.7,2.4,3.1,2.4H91V56.2z"/></g></svg>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;