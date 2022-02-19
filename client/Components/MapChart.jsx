import React from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import countryCityObj from "../../seeds/countryCapital";
import store from "../store";
import TootipModal from "./TooltipModal.jsx";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent }) => {
  let currentCity = store.getState();

  return (
    <>
      <div className="map" >
        <ComposableMap data-tip="" projectionConfig={{ scale: 100 }}>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => {
                      let filteredCity = countryCityObj.filter(
                        (element) => element.country === geo.properties.NAME_LONG
                      );
                      store.dispatch({
                        type: "SET_COUNTRY_FROM_MAP",
                        payload: {
                          currentCity: filteredCity[0].city,
                          currentCountry: geo.properties.NAME_LONG,
                        },
                      });
                    }}
                    onMouseEnter={() => {
                      const {
                        NAME
                      } = geo.properties;
                      setTooltipContent(
                        <TootipModal
                          currentCity={currentCity.currentCity}
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
                        fill: "#9e4242",
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
