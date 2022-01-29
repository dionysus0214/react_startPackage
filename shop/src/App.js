/*eslint-disable*/
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  let [shoes, changeShoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <Route exact path="/">
        <Card className="background" style={{ width: '100%' }} alt="Shoes">
          <Card.Body>
            <Card.Title>20% Season Off</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <div className="container">
          <div className="row">
            { 
              shoes.map((a,i)=>{
                return <ShoesCard shoes={shoes[i]} i={i} key={i} />
              })
            }
          </div>
        </div>
      </Route>

      <Route path="/detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품 설명</p>
              <p>120,000원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div> 
      </Route>
    </div>
  );
}

function ShoesCard(props) {
  return (
    <div className="col-md-4">
      <img src={ `https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg` } width="100%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
    </div>
  )
}

export default App;
