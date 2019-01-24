import React, { Component } from 'react';
import FieldGroup from './FieldGroup';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { itemString, quantidadeString, addToItems } from '../actions/handlers';

class Cadastro extends Component{
    render(){
        return(
            <Form horizontal onSubmit={e => e.preventDefault()}>
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Produto"
                    placeholder="Digite o produto"
                />
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Quantidade"
                    placeholder="Digite a quantidade"
                />
                <Button bsStyle="primary" type="submit" onClick={() => this.props.addToItems([this.props.item, this.props.qtdString])}>Adicionar</Button>
            </Form>
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
        addToItems: (item) => dispatch(addToItems(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);