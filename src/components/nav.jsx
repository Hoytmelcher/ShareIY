import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from '../views/Home'
import Profile from '../views/Profile'
import PostSingle from '../views/PostSingle'
import CreatePost from '../views/CreatePost'
import { AuthContext } from '../contexts/AuthProvider';
import { useContext } from 'react';


function NavComponent() {
  const { login, user, logout } = useContext(AuthContext)
  console.log(user)
  
  return (
    <BrowserRouter>
      <Navbar bg='primary' variant='dark' fixed="top" >
        <Container>
          <Navbar.Brand >
            <Navbar.Text>
              <Link className='btn btn-primary' to="/">ShareYourProject</Link>
            </Navbar.Text>
          </Navbar.Brand>
          {
            (user.loggedIn)?
            <Nav className="me-auto">
                <Navbar.Text>
                  <Link className='btn btn-primary' to="/">Home</Link>
                </Navbar.Text>
                <Navbar.Text>
                  <Link className='btn btn-primary' to="/profile">Profile</Link>
                </Navbar.Text>
                <Navbar.Text>
                  <Link className='btn btn-primary' to="/createpost">Create</Link>
                </Navbar.Text>
                <NavDropdown className='btn btn-primary' title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item >
                    <Link to="/category/modeling">Modeling</Link> 
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item >
                    <Link to="/category/crochet">Crochet</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/category/knitting">Knitting</NavDropdown.Item>
                  <NavDropdown.Item href="/category/woodworking">Woodworking</NavDropdown.Item>
                  <NavDropdown.Item href="/category/printing">3D Printing</NavDropdown.Item>
                  <NavDropdown.Item href="/category/cosplay">Cosplay</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.7">
                    Submit Category
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>  
            :<></>
          }
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {
              (user.loggedIn) ?
              <>
              <Navbar.Text>
                <Link className='btn btn-primary' to="/profile">{user.displayName}</Link>
              </Navbar.Text>
              <Navbar.Text>
                <button className='btn btn-primary' onClick={logout}>Logout</button>
              </Navbar.Text>
              </> :
              <Navbar.Text>
                <button className='btn btn-primary' onClick={login} href="/login">Login</button>
              </Navbar.Text>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/createpost' element={<CreatePost />}/>
        <Route path='/post/:id' element={<PostSingle />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default NavComponent;