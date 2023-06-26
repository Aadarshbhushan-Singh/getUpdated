import React, { Component } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    

    render() {
        
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Get Updated</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                            <Link className="nav-link" to="/science">Science</Link>
                            <Link className="nav-link" to="/business">Business</Link>
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            <Link className="nav-link" to="/general">General</Link>
                            <Link className="nav-link" to="/health">Health</Link>
                            <Link className="nav-link" to="/sports">Sports</Link>
                            <Link className="nav-link" to="/technology">Technology</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>


        )
    }
}
