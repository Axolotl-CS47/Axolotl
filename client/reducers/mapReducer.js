const initialState = { currentCity: '' };
const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_CITY": {
      return {
        ...state,
        currentCity: action.payload,
      };
    }
    default:
      return state;
  }
};
export default mapReducer;
