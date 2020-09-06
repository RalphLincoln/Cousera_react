import React from 'react'

import {
    Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { Link } from 'react-router-dom';

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

function RenderComment({ dish }) {
    if (dish != null)
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
                                        <CardText>{com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', date: '2-digit' }).format(new Date(Date.parse(com.date)))} </CardText>
                                    </div>
                                )
                            })
                        }
                    </CardBody>
                </Card>
            </div>
        );
    else
        return (
            <div></div>
        );
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
