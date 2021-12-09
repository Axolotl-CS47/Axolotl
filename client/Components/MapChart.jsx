import React, {useState} from "react";
import ReactTooltip from 'react-tooltip';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import store from "../store";
import TootipModal from "./TooltipModal.jsx";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent }) => {
  const [state, setState] = useState('');
  let currentState = store.getState();

  return (
    <>
<<<<<<< HEAD
    <div style={{height: "1000px", width: "1000px"}}>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
      {/* <Graticule stroke="#F53" />  */}
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
<<<<<<< HEAD
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                   // setTooltipContent(geo.properties);
                    console.log("geo.properties", geo.properties)
                    // setTooltipContent(<Trip currentCity = {currentState.currentCity} geo = {geo} NAME={NAME}/>);
                  //   <ReactTooltip
                  //   backgroundColor="#a1caf1"
                  //   textColor="black"
                  //   clickable={true}
                  // >
                  //   <Trip currentCity = {currentState.currentCity} geo = {geo} NAME={NAME}/>
                  // </ReactTooltip>
=======
                  onClick={() => {
                    const { NAME} = geo.properties;
                    setTooltipContent(<Trip currentCity = {currentState.currentCity} geo = {geo} NAME={NAME}/>);
>>>>>>> d9475f875d1b6f333051bcd32ae17516f4cccc3e
                  }}
                  onMouseLeave={() => {
                  //  setTooltipContent("");
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
=======
      <div style={{ height: "1000px", width: "1000px" }}>
        <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {

                      const { NAME, POP_EST, GDP_MD_EST, POP_RANK, GDP_YEAR, NAME_LONG } = geo.properties;
                      setTooltipContent(
                        <TootipModal
                          currentCity={currentState.currentCity}
                          details={geo.properties}
                          NAME={NAME}
                        />
                      );
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
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
