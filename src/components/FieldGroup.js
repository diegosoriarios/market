import React, { Component } from 'react'
import { FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap'
import { connect } from 'react-redux';
import { itemString, quantidadeString, addToItems, usernameValue, passwordValue } from '../actions/handlers';

class FieldGroup extends Component {
    handlerChange = e => {
        switch (this.props.label){
            case 'Produto':
                this.props.itemString(e.target.value);
                break;
            case 'Quantidade':
                this.props.quantidadeString(e.target.value);
                break;
            case 'Email':
                this.props.usernameValue(e.target.value);
                break;
            case 'Password':
                this.props.usernameValue(e.target.value);
                break;
            default:
                console.log('ok')
                break;
        }
    }
    render(){
        return(
            <FormGroup controlId={this.props.id}>
                <Col componentClass={ControlLabel} sm={2}>
                {this.props.label}
                </Col>
                <Col sm={5}>
                <FormControl type={this.props.type} placeholder={this.props.placeholder} onChange={e => this.handlerChange(e)}/>
                </Col>
            </FormGroup>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        item: state.itemString,
        qtdString: state.quantidadeString,
        items: state.addToItems
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        itemString: (item) => dispatch(itemString(item)),
        quantidadeString: (item) => dispatch(quantidadeString(item)),
        addToItems: (item) => dispatch(addToItems(item)),
        usernameValue: (item) => dispatch(usernameValue(item)),
        passwordValue: (item) => dispatch(passwordValue(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FieldGroup);