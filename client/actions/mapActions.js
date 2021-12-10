const setCurrentCity = (currentCity) => {
  return {
    type: "SET_CURRENT_CITY",
    payload: currentCity,
  };
};
export default setCurrentCity;
