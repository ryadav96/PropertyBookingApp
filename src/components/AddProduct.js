import React from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/actionType";

class AddProduct extends React.Component {
  addProduct = () => {
    this.props.dispatch({
      type: actions.ADD_PRODUCT,
      payload: {
        name: "Laptop",
        image: "",
        description:
          " Test action sactionsactions actionsa ctio nsacti onsa ction sactio d nsact ions"
      }
    });
  };
  render() {
    const productios = this.props.products.map(product => {
      return (
        <li key={product.id}>
          <h2>{product.details.name}</h2>
          <p>{product.details.description}</p>
        </li>
      );
    });
    console.log(this.props.products);
    return (
      <>
        <h1 onClick={this.addProduct}>React Add PRODUCT</h1>
        <ol>{productios}</ol>
      </>
    );
  }
}
const mapStateToProps = state => {
  return { products: state };
};
export default connect(mapStateToProps)(AddProduct);
