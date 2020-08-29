import React, { Component } from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

import DishDetail from './DishDetailComponent';


export default class MenuComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }


    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <div className='row'>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    renderComment(dish) {
        if (dish != null) {
            return (
                <div className="row">
                    <Card>
                        <CardBody>
                            <h4>Comment</h4>
                            {
                                dish.comments.map((com) => {
                                    return (
                                        <div key={com.id} >
                                            <CardText>{com.comment}</CardText>
                                            <CardText>{com.author}</CardText>
                                        </div>
                                    )
                                })
                            }
                        </CardBody>
                    </Card>
                </div>
            )
        }
    }


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div onClick={() => this.onDishSelect(dish)} key={dish.id} className="col-12 col-md-5 m-1">
                    <DishDetail dish={dish} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComment(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}
