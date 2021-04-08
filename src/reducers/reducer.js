import * as actions from "./../actions/actionType";
let latestId = 0;
export function updateState(state = [], action) {
  switch (action.type) {
    case actions.ADD_PRODUCT: {
      const newState = [
        ...state,
        {
          id: latestId++,
          details: action.payload
        }
      ];
      return newState;
    }
    case actions.REMOVE_PRODUCT: {
      return state.filter(product => product.id != action.payload.id);
    }
  }
  return state;
}
