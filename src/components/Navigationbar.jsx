import { useContext, useEffect, useState } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { logoutUser } from '../api';


const Navigationbar = () => {
  const {user} = useContext(UserContext)
  const [message, setMessage] = useState('')
  
  
  useEffect(()=>{
      <Navigationbar/>
  }, [user])

  const handleLogout = () =>{
    logoutUser().then(({data}) => {
      setMessage(data.message)
      window.location.reload(false);
    })

  }

  const activeLink = 'me-4 nav-link actives'
  const normalLink = 'me-4 nav-link'



  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="auto" variant="light" className='navbar sticky-top'> 
        <div className='container'> 
            <Navbar.Brand className='brand' href="#home">Y-CLOTHING</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink className={({isActive})=> (isActive ? activeLink : normalLink)} to='/home'>Home</NavLink>
                    <NavLink className={({isActive})=> (isActive ? activeLink : normalLink)}to="/catalog"> Catalog</NavLink>
                    <NavLink className={({isActive})=> (isActive ? activeLink : normalLink)} to="/cart">Cart</NavLink>                                              
                    {user ? 
                          <NavDropdown title={user.username} id="nav-dropdown">                    
                            <NavDropdown.Item eventKey="4.1"><NavLink onClick={handleLogout}>Logout</NavLink></NavDropdown.Item>                            
                        </NavDropdown> 
                    : <NavLink className='mt-2' to="/login">Login</NavLink>}
                    
                </Nav>
            </Navbar.Collapse>
        </div>
        </Navbar>
    </>

  );
}
export default Navigationbar;