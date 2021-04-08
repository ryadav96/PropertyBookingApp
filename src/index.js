import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { updateState } from "./reducers/reducer";
import App from "./App";
import * as actions from "./actions/actionType";

const store = createStore(updateState);

store.dispatch({
  type: actions.ADD_PRODUCT,
  payload: {
    name: "Laptop",
    image: "",
    description:
      " Test action sactionsactions actionsa ctio nsacti onsa ction sactio d nsact ions",
  },
});
store.dispatch({
  type: actions.ADD_PRODUCT,
  payload: {
    name: "Laptop",
    image: "",
    description:
      " Test action sactionsactions actionsa ctio nsacti onsa ction sactio d nsact ions",
  },
});
store.dispatch({
  type: actions.ADD_PRODUCT,
  payload: {
    name: "Laptop",
    image: "",
    description:
      " Test action sactionsactions actionsa ctio nsacti onsa ction sactio d nsact ions",
  },
});
store.dispatch({
  type: actions.ADD_PRODUCT,
  payload: {
    name: "Laptop",
    image: "",
    description:
      " Test action sactionsactions actionsa ctio nsacti onsa ction sactio d nsact ions",
  },
});

store.dispatch({
  type: actions.ADD_PRODUCT,
  payload: {
    name: "Laptop",
    image: "",
    description:
      " Test action sactionsactions actionsa ctio nsacti onsa ction sactio d nsact ions",
  },
});
// console.log(store.getState());
// store.dispatch({
//   type: actions.REMOVE_PRODUCT,
//   payload: {
//     id: 3
//   }
// });
// console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
