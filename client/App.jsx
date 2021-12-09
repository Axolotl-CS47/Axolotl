import React, { useState } from "react";
import ReactDOM from "react-dom";
import Dashboard from "../client/Components/Dashboard.jsx";
import MapChart from "./Components/MapChart.jsx";
import ToDo from "./Components/ToDo.jsx";
import ReactTooltip from "react-tooltip";
import "./styles.css";
const App = () => {
  const [content, setContent] = useState("");

  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip
        className="tool-tip"
        backgroundColor="white"
        textColor="black"
        clickable
      >
        {content}
      </ReactTooltip>
      <Dashboard />
      <ToDo />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});

export default App;
