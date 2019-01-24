import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { itemString, quantidadeString, addToItems } from '../actions/handlers';

class Carrinho extends Component {
    renderListItems = () => {
        if(this.props.items){
            return this.props.items.items.map((values, index) => {
                return <ListGroupItem key={index}>{values}</ListGroupItem>
            })
        }else{
            return <div>...</div>
        }
    }
    render(){
        return(
            <ListGroup>
                {this.renderListItems()}
            </ListGroup>
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

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);