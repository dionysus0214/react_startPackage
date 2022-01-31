/*eslint-disable*/
import React, { useState } from 'react';
import { Navbar, Container, Nav, Card, Button } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import Detail from './Detail.js';
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
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
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
          <Detail />
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을 때</div>
        </Route>
      </Switch>
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
