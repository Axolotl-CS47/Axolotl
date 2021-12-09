import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../client/Components/Dashboard.jsx';
import MapChart from './Components/MapChart.jsx';
<<<<<<< HEAD
import ReactTooltip from 'react-tooltip';
import style from './styles.css';
import Modal from './Components/Modal.jsx';
import Trip from './Components/Trip.jsx';
=======
import ToDo from './Components/ToDo.jsx';
import ReactTooltip from "react-tooltip";
import style from "./styles.css";
>>>>>>> d9475f875d1b6f333051bcd32ae17516f4cccc3e
const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const App = () => {
const [content, setContent] = useState()
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
<<<<<<< HEAD
      <ReactTooltip
                    backgroundColor="#a1caf1"
                    textColor="black"
                    clickable={true}
                  >
                  <Trip geo={content}/>
                  </ReactTooltip>
      <Dashboard />
=======
      <ReactTooltip backgroundColor="white" textColor="black" clickable>{content}</ReactTooltip>
      <Dashboard />
      <ToDo />

>>>>>>> d9475f875d1b6f333051bcd32ae17516f4cccc3e
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});

export default App;
