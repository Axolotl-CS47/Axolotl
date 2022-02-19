import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const App = React.lazy(() => import("../client/App.jsx"));
const Dashboard = React.lazy(() => import("./components/Dashboard.jsx"));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<React.Suspense fallback={<>...</>}>
          <App />
        </React.Suspense>}></Route>
        <Route path="/dashboard" element={<React.Suspense fallback={<>...</>}>
          <Dashboard />
        </React.Suspense>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
