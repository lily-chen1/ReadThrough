import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

function NavBarComp() {
        return (
            // <Navbar>
            //     <Container>
            //         <Navbar.Brand href="#home"> Home </Navbar.Brand>
            //         <Nav className="me-auto">
            //         <Nav.Link href="/setuser">Set User</Nav.Link>
            //         <Nav.Link href="/searchresults">Search</Nav.Link>
            //         <Nav.Link href="/users">Users</Nav.Link>
            //         <NavDropdown title="Profile" id="profile-nav-dropdown">
            //             <NavDropdown.Item href="profile">My profile</NavDropdown.Item>
            //             <NavDropdown.Item href="">Edit profile</NavDropdown.Item>
            //             <NavDropdown.Item href="">Settings</NavDropdown.Item>
            //             <NavDropdown.Divider/>
            //             <NavDropdown.Item href="">Logout</NavDropdown.Item>
            //         </NavDropdown>
            //         </Nav>
            //     </Container>
            //     </Navbar>


            // <nav className="navigation">
            // <a href="/home">
            //     Home
            // </a>
            // <div className="navigation-menu">
            //     <ul>
            //     <li>
            //         <a href="/setuser">Set User</a>
            //     </li>
            //     <li>
            //         <a href="/users">Users</a>
            //     </li>
            //     <li>
            //         <a href="/profile">Profile</a>
            //     </li>
            //     </ul>
            // </div>
            // </nav>

            <div className="navigation">
                <ul>
                <li className="navItem">
                    <a href="/home">Home</a>
                </li>
                <li className="navItem">
                    <a href="/setuser">Set User</a>
                </li>
                <li className="navItem">
                    <a href="/users">Users</a>
                </li>
                <li className="navItem">
                    <a href="/profile">Profile</a>
                </li>
                </ul>
            </div>
        );

}

export default NavBarComp;