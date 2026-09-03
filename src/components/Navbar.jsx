import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';

function NavbarCustom() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Navbar
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>

                    <Nav.Link as={Link} to="/info">
                        Info
                    </Nav.Link>

                    <Nav.Link as={Link} to="/register">
                        Registrati
                    </Nav.Link>

                    <Nav.Link as={Link} to="/login">
                        Accedi
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavbarCustom;