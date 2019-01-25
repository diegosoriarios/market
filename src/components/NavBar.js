import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userIsLogged, dispatchError } from '../actions/handlers'

class NavBar extends Component {
    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#brand">Nome</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        Link
                    </NavItem>
                    </Nav>
                    <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Link
                    </NavItem>
                    <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={2.1}>Conta</MenuItem>
                        <MenuItem eventKey={2.2}>Another action</MenuItem>
                        <MenuItem eventKey={2.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={2.3} onClick={() => { this.props.dispatchError(false); this.props.userIsLogged(false)}}>
                            {this.props.logged ? 'Logout' : 'Login'}
                        </MenuItem>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {
        logged: state.userIsLogged
    }
}

const mapDispatchToProps = dispatch => {
    return{ 
        userIsLogged: (bool) => dispatch(userIsLogged(bool)),
        dispatchError: (bool) => dispatch(dispatchError(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);