import React, { useEffect, useState } from 'react'
import { Chart, DecimationAlgorithm } from 'chart.js'
import * as ChartGeo from 'chartjs-chart-geo'
import classes from './styles.css'
// import { useHistory } from 'react-router'

// const history = useHistory();

const Map = () => {
  //   const chartRef = React.createRef();
  //   const myChartRef = this.chartRef.current.getContext("2d");
  const [paises, getPaises] = useState([]);
  /*
  function addToPaises(e){
    const newCountry = e.target.value;
    getPaises([...paises, newCountry]);
  }
  */

  useEffect(() => {

    fetch('https://unpkg.com/world-atlas/countries-50m.json')
      .then((r) => r.json())
      .then((data) => {
        const countries = ChartGeo.topojson.feature(
          data,
          data.objects.countries).features
        const labels = countries.map((d) => d.properties.name)
        // const paises = ['068', '036', '840']

        fetch('/api/')
          .then(jsonData => jsonData.json())
          .then(data => {
            // console.log(paises)
            const paises = data;
            const values = countries.map((d) => {
              if (paises.includes(d.id)) {
                console.log(d)
                return {
                  feature: d,
                  value: 1, // Math.random()
                }
              } else {
                return {
                  feature: d,
                  value: 0,
                }
              }
            })

            /*
            .then(data => {
            // console.log(paises)
            const paises = data;
            const values = countries.map((d) => {
              if (paises.includes(d.id) && value == 0) {
                console.log(d)
                return {
                  feature: d,
                  value: 1, // Math.random()
                }
              }
              if (paises.includes(d.id) && value == 1) {
                console.log(d)
                return {
                  feature: d,
                  value: 0.4, // Math.random()
                }
              } 
              if (paises.includes(d.id) && value == 0.4) {
                console.log(d)
                return {
                  feature: d,
                  value: 0.4, // Math.random()
                }
              } 
              else {
                return {
                  feature: d,
                  value: 0,
                }
              }
            })
            */


            // console.log(labels)
            // console.log(values)

            //   const can2 = document.getElementById("0").getContext("2d")
            //   can2.destroy()
            const chart = new Chart(
              document.getElementById('canvas2').getContext('2d'),
              {
                type: 'choropleth',
                data: {
                  labels: labels,
                  datasets: [
                    {
                      label: 'Countries',
                      data: values,
                    },
                  ],
                },
                options: {
                  showOutline: true,
                  showGraticule: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    xy: {
                      projection: 'equalEarth',
                    },
                  },
                  // onHover(e) {},
                  onClick(e) {
                    const activePoints = this.getElementsAtEventForMode(e, 'nearest', {
                      intersect: true
                    }, false)
                    const [{
                      index
                    }] = activePoints;
                    // console.log(this.datasets[0].data[index]);
                    console.log(this.data.datasets[0].data[index].feature.id);
                    const countryId = this.data.datasets[0].data[index].feature.id;
                    const requestOptions = {
                      method: 'PATCH',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        title: `Adding new country: ${countryId}`,
                        countryId
                      }),
                    };

                    // async fetch method to send patch request to server @ api/ endpoint and parse response
                    fetch('/api/', requestOptions)
                      .then((response) => response.json())
                      .then((data) => window.location.reload(false))
                    // console.log('Your Patch request was successful, the country ID was added to the database!');

                  },
                },
              },
            )
            // console.log(chart.options.events);
          })
      },
      )
  })


  return (<canvas id="canvas2" className={classes.bodymap}></canvas>
  )
}

export default Map
