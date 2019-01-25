import React, { Component } from 'react';
import Cadastro from './components/Cadastro';
import Carrinho from './components/Carrinho';
import NavBar from './components/NavBar';
import Login from './components/Login';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userIsLogged } from './actions/handlers'

class App extends Component {
  render() {
    if(this.props.isLogged){
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
    }else{
      return (
        <Grid>
          <Row className="show-grid">
          <Col xs={6} xsOffset={4}>
            <Login />
          </Col>
          </Row>
        </Grid>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
      isLogged: state.userIsLogged
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      userIsLogged: (bool) => dispatch(userIsLogged(bool))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
