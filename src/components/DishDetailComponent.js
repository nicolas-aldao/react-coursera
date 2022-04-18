import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderComments(comments) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
        {comments.map((comment) => {
          return (
            <li>
              <p>{comment.comment}</p>
              <p>
                --{comment.author}, {comment.date}
              </p>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="row justify-content-center">
          <Card key={dish.id} className="col-12 col-md-5 m-1">
            <CardImg top src={dish.image} alt={dish.name} className="img-responsive"/>
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
          {this.renderComments(dish.comments)}
        </div>
      );
    } else return <div></div>;
  }
  render() {
    // const comments = this.props.dish.comments.map((comment) => {
    //   return (
    //     <div>
    //       <p>{comment.comment}</p>
    //       <p>
    //         --{comment.author}, {comment.date}
    //       </p>
    //     </div>
    //   );
    // });
    return this.renderDish(this.props.dish);
  }
}

export default DishDetail;
