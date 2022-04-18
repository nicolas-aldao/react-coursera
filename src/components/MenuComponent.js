import React, { Component } from "react";
import DishDetail from "./DishDetailComponent";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  renderDish(dish) {
    if (dish != null) {
      return <DishDetail dish={dish} />;
    } else return <div></div>;
  }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <Card
          key={dish.id}
          onClick={() => this.onDishSelect(dish)}
          className="col-12 col-md-5 m-1"
        >
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.title}</CardTitle>
          </CardImgOverlay>
        </Card>
      );
    });
    return (
      <div className="container">
        <div className="row justify-content-center">{menu}</div>
        <div className="row justify-content-center">
          <div>
            {/* col-12 col-md-5 m-1 */}
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export { Menu };
