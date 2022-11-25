import React,{useContext, useEffect} from 'react'
import { consumptioncontext } from '../context/Consumptionstate';
import Consitem from './Consitem';

const History = () => {

  const {cons,overallcons,getoverallcons,getcons,fetchcons,host} = useContext(consumptioncontext);

  useEffect(()=>{
    fetchcons();
    getcons();
    getoverallcons();
    // eslint-disable-next-line
  },[cons])

  const close = async (consid)=>{

    const url = `${host}/usercons/deletecons/${consid}`

        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          }
        });
        const json = await response.json();
        // setcons(json)
        console.log(json)


    // const tempcons = cons.filter(element => {return element._id !== consid});
    // setcons(tempcons);
  }

  return (
    <div className='container d-flex flex-column'>
        <div className="d-flex row flex-row justify-content-center align-items-center">
          <span className='col-4 col-sm-4 col-md-2 col-lg-2 col-xxl-2 d-flex justify-content-center align-items-center flex-column m-2 p-3' style={{backgroundColor:"#5ec342", borderRadius:"20px",boxShadow: "black 0px 2px 5px 0px"}}>
            <p className='text-center' style={{color:"white",fontSize: window.innerWidth <500? "3vw":""}}>Overall Calories Consumed</p>
            <p style={{color:"white"}}><b className='fs-2'>{overallcons.calories}</b> Kcal</p>
          </span>
          <span className='col-4 col-sm-4 col-md-2 col-lg-2 col-xxl-2 d-flex justify-content-center align-items-center flex-column m-2 p-3' style={{backgroundColor:"#a742c3", borderRadius:"20px",boxShadow: "black 0px 2px 5px 0px"}}>
            <p className='text-center' style={{color:"white",fontSize: window.innerWidth <500? "3vw":""}}>Overall protien Consumed</p>
            <p style={{color:"white"}}><b className='fs-2'>{overallcons.protien}</b> grams</p>
          </span>
          <span className='col-4 col-sm-4 col-md-2 col-lg-2 col-xxl-2 d-flex justify-content-center align-items-center flex-column m-2 p-3' style={{backgroundColor:"#42c3a7", borderRadius:"20px",boxShadow: "black 0px 2px 5px 0px"}}>
            <p className='text-center' style={{color:"white",fontSize: window.innerWidth <500? "3vw":""}}>Overall fat Consumed</p>
            <p style={{color:"white"}}><b className='fs-2'>{overallcons.fat}</b> grams</p>
          </span>
          <span className='col-4 col-sm-4 col-md-2 col-lg-2 col-xxl-2 d-flex justify-content-center align-items-center flex-column m-2 p-3' style={{backgroundColor:"#c3425e", borderRadius:"20px",boxShadow: "black 0px 2px 5px 0px"}}>
            <p className='text-center' style={{color:"white",fontSize: window.innerWidth <500? "3vw":""}}>Overall carbohydrate Consumed</p>
            <p style={{color:"white"}}><b className='fs-2'>{overallcons.carbs}</b> grams</p>
          </span>
        </div>
        <div className='container d-flex justify-content-center align-items-center flex-row'>
          <div className="row d-flex justify-content-center align-items-center m-2" style={{overflowY:"auto", height:"48vh"}}>
              {cons.slice(0).reverse().map((cons)=>{
                  return <Consitem food={cons} key={cons._id} close={close}/>
              })}
              {cons.length === 0? <h3><center>No Consumption Found</center></h3>: null}
              
          </div>
        </div>
    </div>
  )
}
// , height:"65vh"
export default History
