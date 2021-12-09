import { createStore } from "redux";
import mapReducer from "./reducers/mapReducer";

const store = createStore(mapReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
