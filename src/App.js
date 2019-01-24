import React, { Component } from 'react';
import Cadastro from './components/Cadastro';
import Carrinho from './components/Carrinho';
import NavBar from './components/NavBar';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Grid>
          <Row className="show-grid">
            <Col md={6} mdPush={6}>
              <Carrinho />
            </Col>
            <Col md={6} mdPull={6}>
              <Cadastro />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
