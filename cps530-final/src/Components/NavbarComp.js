import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";
import Page1 from '../Pages/Page1';
import Page2 from '../Pages/Page2';
import Page3 from '../Pages/Page3';
import Page4 from '../Pages/Page4';
import Page5 from '../Pages/Page5';
import Page6 from '../Pages/Page6';

export default class NavbarComp extends Component {
   render() {
       return (
           <Router>
           <div>
               <Navbar bg="primary" variant="dark">
                   <Container>
                   <Navbar.Brand href="#home">CPS530 TERM PROJECT</Navbar.Brand>
                   <Nav className="me-auto">
                   <Nav.Link as={Link} to={"/"}>Page1</Nav.Link>
                   <Nav.Link as={Link} to={"/Page2"}>Page2</Nav.Link>
                   <Nav.Link as={Link} to={"/Page3"}>Page3</Nav.Link>
                   <Nav.Link as={Link} to={"/Page4"}>Page4</Nav.Link>
                   <Nav.Link as={Link} to={"/Page5"}>Page5</Nav.Link>
                   <Nav.Link as={Link} to={"/Page6"}>Page6</Nav.Link>

                   </Nav>
                   </Container>
               </Navbar>
           </div>
           <div>
           <Switch>
           <Route path="/Page6">
           <Page6 />
         </Route>
           <Route path="/Page5">
           <Page5 />
         </Route>
           <Route path="/Page4">
           <Page4 />
         </Route>
         <Route path="/Page3">
           <Page3 />
         </Route>
         <Route path="/Page2">
           <Page2 />
         </Route>
         <Route path="/">
           <Page1 />
         </Route>
       </Switch>
           </div>
           </Router>
 
       )
   }
}
 
 
