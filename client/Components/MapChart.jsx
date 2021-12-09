import React from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  // Graticule
} from "react-simple-maps";

import Trip from './Trip.jsx';
import store from '../store';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const MapChart = ({ setTooltipContent }) => {
  let currentState = store.getState();

  return (
    <>
    <div style={{height: "800px", width: "800px"}}>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
      {/* <Graticule stroke="#F53" />  */}
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    const { NAME} = geo.properties;
                    setTooltipContent(<Trip currentCity = {currentState.currentCity} geo = {geo} NAME={NAME}/>);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      </div>
    </>
  );
};

export default MapChart;
