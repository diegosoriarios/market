import React, { Component } from 'react';
import FieldGroup from './FieldGroup';
import { Form, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { itemString, quantidadeString, addToItems, userIsLogged, dispatchError, checkLogin } from '../actions/handlers';

class Login extends Component{
    render(){
        if(this.props.error){
            return(
                <Alert bsStyle="danger" onDismiss={() => this.props.dispatchError(false)}>
                    <h4>Login ou senha invalidos!</h4>
                    <p>
                        Change this and that and try again. Duis mollis, est non commodo
                        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                        Cras mattis consectetur purus sit amet fermentum.
                    </p>
                    <p>
                        <Button onClick={() => this.props.dispatchError(false)}>Hide Alert</Button>
                    </p>
                </Alert>
            );
        }
        return(
            <Form horizontal onSubmit={e => e.preventDefault()}>
                <FieldGroup
                    id="formControlsEmail"
                    type="email"
                    label="Email"
                    placeholder="Enter email"
                />
                <FieldGroup 
                    id="formControlsPassword" 
                    label="Password" 
                    type="password" 
                    placeholder="Password"
                />
                <Button bsStyle="primary" type="submit" onClick={() => this.props.checkLogin(this.props.username, this.props.password)}>Login</Button>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.itemString,
        qtdString: state.quantidadeString,
        items: state.addToItems,
        username: state.usernameValue,
        password: state.passwordValue,
        error: state.dispatchError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        itemString: (item) => dispatch(itemString(item)),
        quantidadeString: (item) => dispatch(quantidadeString(item)),
        addToItems: (item) => dispatch(addToItems(item)),
        userIsLogged: (bool) => dispatch(userIsLogged(bool)),
        dispatchError: (bool) => dispatch(dispatchError(bool)),
        checkLogin: (username, password) => dispatch(checkLogin(username, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);