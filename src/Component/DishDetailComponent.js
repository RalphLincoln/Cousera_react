import React, { Component } from 'react'

import {
    Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
    FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, Form, Row, Col
} from 'reactstrap';

import { Link } from 'react-router-dom';

import { FaPencilAlt } from 'react-icons/fa';

import { Control, LocalForm, Errors } from 'react-redux-form';

function RenderDish({ dish }) {
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

class RenderComment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            name: '',
            touched: {
                name: false
            }
        };
        this.toggleModal = this.toggleModal.bind(this);
    }


    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit = (event) => {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        if (this.props.comments != null)
            return (
                <div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <FormGroup>
                                    <Label htmlFor="username">Rating</Label>
                                    <Input type="select" id="rating" name="rating"
                                        innerRef={(input) => this.rating = input} >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                                <div className="form-group">
                                    <Label htmlFor="firstname">Your Name</Label>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </div>
                                <FormGroup>
                                    <Label htmlFor="username">Comment</Label>
                                    <Input type="textarea" rows='6' id="comment" name="comment"
                                        innerRef={(input) => this.comment = input} />
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                    <div className="row">
                        <Card>
                            <CardBody>
                                <h4>Comment</h4>
                                {
                                    this.props.comments.map((com) => {
                                        return (
                                            <div key={com.id} >
                                                <CardText>{com.comment}</CardText>
                                                <CardText>{com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', date: '2-digit' }).format(new Date(Date.parse(com.date)))} </CardText>
                                            </div>
                                        )
                                    })
                                }
                                <a onClick={this.toggleModal} className='btn btn-outline-secondary text-secondary mt-3'><FaPencilAlt /> Submit Comment</a>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

}

const DishDetail = (props) => {
    const { dish, comments } = props
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComment comments={comments} />
                </div>
            </div>
        </div>
    )
}

export default DishDetail;
