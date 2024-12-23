import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../App.css"

function NavBar() {
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
  const navigate = useNavigate(); // React Router's navigation hook

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent page reload
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`); // Redirect to search results page
    } else {
      alert('Please enter a search query');
    }
  };

  return (
    <Navbar fixed="top" expand="lg" bg="light" className="align-items-center shadow-sm">
      <Container fluid>
      <img src='https://www.shutterstock.com/image-vector/satisfied-man-drinks-mug-foamy-600w-2509004721.jpg'
          style={{ borderRadius: '50%' , width:'100px' ,height: ' 100px' }}>
        </img>
        <Navbar.Brand as={Link} to="/" style={{ color: "black", fontSize: '25px', fontFamily: 'cursive', textShadow: '0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18' }}>
          DeBar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/Bestseller" style={{ marginRight: '10px', fontWeight: 'bold', fontSize: '18px', textShadow: '1px 0px 10px rgba(26,255,0,0.89)' }}>
              BESTSELLER
            </Nav.Link>
            <Nav.Link as={Link} to="/fresharrivals" style={{ marginRight: '10px', fontWeight: 'bold', fontSize: '18px', textShadow: '1px 0px 10px rgba(26,255,0,0.89)' }}>
              FRESH ARRIVALS
            </Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown" style={{ marginRight: '10px', fontWeight: 'bold', fontSize: '18px', textShadow: '1px 0px 10px rgba(26,255,0,0.89)' }}>
              <NavDropdown.Item as={Link} to="/glasses">Glasses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/furniture">Furniture</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/decor">Decorative Items</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/accessories">Accessories</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex ms-auto" onSubmit={handleSearch}>
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <Button variant="outline-success" onClick={handleSearch}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Button as={Link} to="/login" style={{ marginRight: '20px' }}>Login/SignUp</Button>
    </Navbar>
  );
}

export default NavBar;