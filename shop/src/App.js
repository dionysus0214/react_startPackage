/*eslint-disable*/
import React, { useState } from 'react';
import { Navbar, Container, Nav, Card, Button } from 'react-bootstrap';
import './css/App.css';
import data from './data.js';
import Detail from './components/Detail.js';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

function App() {
  let [shoes, changeShoes] = useState(data);
  let [stock, changeStock] = useState([10, 15, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
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
                shoes.map((a, i) => {
                  return <ShoesCard shoes={shoes[i]} i={i} key={i} />
                })
              }
            </div>
            <button className="btn btn-primary" onClick={() => {
              // axios.post('서버URL', { id: 'abcd', pw: 1234 });
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((res) => {
                  changeShoes([...shoes, ...res.data]);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}>더보기</button>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} stock={stock} changeStock={changeStock} />
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
