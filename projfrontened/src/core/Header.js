import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Form,
  Input
} from 'reactstrap';
import {NavLink,withRouter} from 'react-router-dom'
import { signout ,isAutheticated} from '../auth/helper';



const currentTab = (history, path) => {
  if (history.location.pathname === path) {   //location.pathname display the path of url and history tell us on which user visited
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};


const Headers = ({history}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  light expand="md" className=" col-12 nav nav-tabs">
        <NavbarBrand className="ml-5">TS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          
          <Nav className="mr-auto ml-3  bg-dark " navbar>
            <NavItem>
              <NavLink className="nav-link  bg-dark" style={currentTab(history, "/home")} to="/home">Home</NavLink>
            </NavItem>
            
            {isAutheticated() && isAutheticated().user.role === 0 &&(  
            <NavItem>
              <NavLink className="nav-link bg-dark " style={currentTab(history, "/user/dashboard")} to="/user/dashboard">U.DashBoard</NavLink>
            </NavItem>
             )}

            
           {isAutheticated() && isAutheticated().user.role === 1 &&(       
            <NavItem>
              <NavLink className="nav-link bg-dark" style={currentTab(history, "/admin/dashboard")} to="/admin/dashboard">A.DashBoard</NavLink>
            </NavItem>
             )}
          

           {!isAutheticated()&&(  
            <NavItem>
              <NavLink className="nav-link bg-dark" style={currentTab(history, "/signup")} to="/signup">Sign Up</NavLink>
            </NavItem>
            )}


           {isAutheticated() && (
             <NavItem>
               <span
               className="nav-link text-warning"
               onClick={()=>{
                 signout(()=>{
                   history.push("/")
                 })
               }}
              
              >signout
              </span>
            </NavItem>

           )}
            
                   


          </Nav>
          <Form inline className="  col-5">
              <Input   type="text"  placeholder="Search" className=" col-12 mt-1  col-sm-6 col-xs-12" />
              {!isAutheticated() && ( 
              <NavLink className="nav-link  bg-dark ml-2"   style={currentTab(history, "/signin")} to="/signin">Login</NavLink>
              )}
              <NavLink className="nav-link  bg-dark text-white col-12 col-md-1 ml-2 border-0" to="/cart"><FontAwesomeIcon icon={ faShoppingCart}/></NavLink>
            </Form>
          
        </Collapse>
      </Navbar>
    </div>
  );
}
export default withRouter(Headers)