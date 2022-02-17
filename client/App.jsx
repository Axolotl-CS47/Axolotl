import React, { useState } from "react";
import ReactDOM from "react-dom";
import Dashboard from "../client/components/Dashboard.jsx";
import MapChart from "./components/MapChart.jsx";
import ToDo from "./components/ToDo.jsx";
import ReactTooltip from "react-tooltip";
import "./styles.css";

const App = () => {
  const [content, setContent] = useState("");
  return (
    <div>
      <hr />
      <div style={{background: '#6464DC'}}>
      <MapChart setTooltipContent={setContent} />
      </div>
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
