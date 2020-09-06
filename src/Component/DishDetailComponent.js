import React from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

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
    const { dish } = props
    return (
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComment dish={dish} />
            </div>
        </div>
    )
}

export default DishDetail;
