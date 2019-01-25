import React, { Component } from 'react';
import FieldGroup from './FieldGroup';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { itemString, quantidadeString, addToItems, userIsLogged } from '../actions/handlers';

class Login extends Component{
    render(){
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
                <Button bsStyle="primary" type="submit" onClick={() => console.log(this.props.username)}>Login</Button>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.itemString,
        qtdString: state.quantidadeString,
        items: state.addToItems,
        username: state.username,
        password: state.passwordValue
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        itemString: (item) => dispatch(itemString(item)),
        quantidadeString: (item) => dispatch(quantidadeString(item)),
        addToItems: (item) => dispatch(addToItems(item)),
        userIsLogged: (bool) => dispatch(userIsLogged(bool))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);