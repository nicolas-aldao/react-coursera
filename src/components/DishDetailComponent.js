import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

const RenderComments = ({ comments, postComment, dishId }) => {
  return (
    <div>
      <h4>Comments</h4>
      <ul className="list-unstyled">
        <Stagger in>
          {comments.map((comment) => {
            return (
              <Fade in>
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    --{comment.author},{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.date)))}
                  </p>
                </li>
              </Fade>
            );
          })}
        </Stagger>
        <li>
          <CommentForm dishId={dishId} postComment={postComment} />
        </li>
      </ul>
    </div>
  );
};
const RenderDish = ({ dish }) => {
  if (dish != null) {
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Card key={dish.id}>
          <CardImg top src={baseUrl + dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  } else return <div></div>;
};
const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish
              dish={props.dish}
              isLoading={props.isLoading}
              errMess={props.errMess}
            />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments
              comments={props.comments}
              postComment={props.postComment}
              dishId={props.dish.id}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
