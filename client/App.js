import React, { useEffect } from 'react'
import { Chart, DecimationAlgorithm } from 'chart.js'
import * as ChartGeo from 'chartjs-chart-geo'
import classes from './styles.css'

const MapChart = () => {
  //   const chartRef = React.createRef();
  //   const myChartRef = this.chartRef.current.getContext("2d");

  const onClick = (e) => {
    console.log(e.target);
  }

  useEffect(() => {


    fetch('https://unpkg.com/world-atlas/countries-50m.json')
      .then((r) => r.json())
      .then((data) => {
        const countries = ChartGeo.topojson.feature(
          data,
          data.objects.countries).features


        const labels = countries.map((d) => d.properties.name)
        const paises = ['068', '036', '840']
        // let paises = [];
        // const fetchCountries = async () => {
        //    const jsonData = await fetch('/api')
        //    paises = await jsonData.json();
        //    console.log(paises);
        //    return 
           
        // }
        // fetchCountries();
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
              // onClick: function(e) {
              //   console.log(e);
              //   // console.log(e.chart.data.labels)
              // },
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
                  .then((data) => console.log('this is supposedly the data after we click: ', data));
              },
            },
          },
        )
        // console.log(chart.options.events);
      })
  },
  )
  // document.addEventListener("click", (e) => {
  //   // if (event.target.nodeName === "the string placement of the country"){
  //     console.log("the page has been clicked", e.target)
  //   // }
  // })


  return (<canvas id="canvas2" className={classes.bodymap}></canvas>
  )
}

export default MapChart
