import { NavLink } from "react-router";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/">Trusty Bank</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/account" className="mx-3">Account</NavLink>
                    <NavLink to="/goal-tracker">Goal Tracker</NavLink>
                </Nav>
            </Container>
        </Navbar >
    );
}