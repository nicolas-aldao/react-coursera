import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const comments = this.props.dish.comments.map((comment) => {
      return (
        <div>
          <p>{comment.comment}</p>
          <p>--{comment.author}, {comment.date}</p>
        </div>
      );
    });
    return (
      <div className="row justify-content-center m-1">
        <Card  key={this.props.dish.id} className="col-12 col-md-5">
          <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
          <CardBody>
            <CardTitle>{this.props.dish.name}</CardTitle>
            <CardText>{this.props.dish.description}</CardText>
          </CardBody>
        </Card>
        <div className="col-12 col-md-5 m-1">
            <h2>Comments</h2>
            {comments}
        </div>
      </div>
    );
  }
}

export default DishDetail;
