import React, { Component } from 'react';

import { DISHES } from '../shared/dishes';

import MenuComponent from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishDetailComponent';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }


    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Header />
                <MenuComponent onClick={(dishId) => this.onDishSelect(dishId)} dishes={this.state.dishes} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Footer />
            </div>
        );
    }
}

export default Main;
