import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import store from '../store';


const Dashboard = () => {


  return (
    <>
        <div>
        <h3>Dashboard</h3>
        <button
        onClick={() =>
          store.dispatch({ type: "SET_CURRENT_CITY", payload: "Toronto" })
        }
      >Click me !!</button>
        <hr></hr>

        </div>
    </>
  );
};

export default Dashboard;