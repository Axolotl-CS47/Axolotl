import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../client/Components/Dashboard.jsx';
import MapChart from './Components/MapChart.jsx';
import ReactTooltip from 'react-tooltip';
import style from './styles.css';
import Modal from './Components/Modal.jsx';
import Trip from './Components/Trip.jsx';
const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const App = () => {
const [content, setContent] = useState()
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip
                    backgroundColor="#a1caf1"
                    textColor="black"
                    clickable={true}
                  >
                  <Trip geo={content}/>
                  </ReactTooltip>
      <Dashboard />
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});

export default App;
