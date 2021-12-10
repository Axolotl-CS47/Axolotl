const initialState = { currentCity: '',
currentCountry: '' };
const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_CITY": {
      return {
        ...state,
        currentCity: action.payload,
      };
    }
    case "SET_COUNTRY_FROM_MAP": {
      return {
        ...state,
        currentCity: action.payload.currentCity,
        currentCountry: action.payload.currentCountry

      };
    }

    default:
      return state;
  }
};
export default mapReducer;
