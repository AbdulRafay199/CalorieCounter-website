import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css'

const Main = () => {
  let windowwidth = window.innerWidth;
  const style1 = {color:"#42C3A7",fontWeight:"bolder",fontSize:"3vw"};
  const style2 = {color:"#42C3A7",fontWeight:"bolder"};

  let location = useLocation();
  return (
    <>
    <div className='container my-4 d-flex justify-content-center' style={{width:"100%"}}>
      <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/"? "active": ""}`} aria-current="page" to="/" style={windowwidth > 600? style2:style1}>Foods</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/history"? "active": ""}`} to="/history" style={windowwidth > 600? style2:style1}>History</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/bmi"? "active": ""}`} to="/bmi" style={windowwidth > 600? style2:style1}>BMI Calculator</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/feedback" style={windowwidth > 600? style2:style1}>Feedback</Link>
          </li>
      </ul>
    </div>
    </>
  )
}

export default Main
