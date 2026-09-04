import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function NavbarCustom() {
    
    const { user , logout } = useContext(AuthContext);
    
    return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              {user ? (
                <>
                 <Nav.Link>{user.name}</Nav.Link>
                 <Nav.Link as={Link} to="/info">Info</Nav.Link>
                 <Nav.Link onClick={logout}>Logout</Nav.Link>
                </> 
              ) : (

                <>
                 <Nav.Link as={Link} to="/register">Registrati</Nav.Link>
                 <Nav.Link as={Link} to="/login">Accedi</Nav.Link>
                </>
              )}
          </Nav>
       </Container>
     </Navbar>
    );
}

export default NavbarCustom;