const initialState = [];
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      let deleteArray = state.filter((item) => item.id != action.payload);
      return deleteArray;
    case "UPDATE":
      let index = state.findIndex((item) => item.id == action.payload.id);
      state[index] = action.payload;
      return state;
    default:
      return state;
  }
};
