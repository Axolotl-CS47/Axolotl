import React from 'react';
const TableRow = (props) => {
  console.log("props", props);
return (
  <tr>
  <td>{props.rowData.departDateTime}</td>
  <td>{props.rowData.arrivalDateTime}</td>
  <td>{props.rowData.destAirport}</td>
  <td>{props.rowData.duration}</td>
  <td>{props.rowData.flightNumber}</td>
  </tr>
);
}
export default TableRow;