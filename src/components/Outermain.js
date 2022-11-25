import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import History from '../components/History';
import Food from '../components/Food';
import Feedback from '../components/Feedback';
import Bmi from '../components/Bmi';
import {
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";

const Outermain = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/login')
    }
  })
  return (
    <>
            <div className="d-flex flex-row">
                <Sidebar/>
                <div className="d-flex mx-auto align-items-center flex-column">
                    <Main/>
                    <Routes>
                    <Route path='/' element={<Food/>}/>        
                    <Route path='/history' element={<History/>}/>
                    <Route path='/bmi' element={<Bmi/>}/>
                    <Route path='/feedback' element={<Feedback/>}/>
                    </Routes> 
                </div>
            </div> 
    </>
  )
}

export default Outermain
