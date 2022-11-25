import React, { useContext, useEffect, useState } from 'react'
import { consumptioncontext } from '../context/Consumptionstate'

const Sidebar = () => {
  const {totalcons,getcons,fetchcons} = useContext(consumptioncontext);
  const [opensidebar,setopensidebar] = useState(false)
  const [targetedcal] = useState(1800)
  const [img, setimg] = useState("https://img.icons8.com/ios-filled/50/FFFFFF/chevron-right.png")
  let progressval = Math.round(((totalcons.calories)/targetedcal)*100)
  useEffect(()=>{
    getcons();
    fetchcons();
    // eslint-disable-next-line
  },[])

  useEffect(()=>{

    if(progressval <=25){
      setprogresscolor("#57aeb3")
    }
    else if(progressval <50 && progressval >25){
      setprogresscolor("#57b363")
    }
    else if(progressval >50 && progressval <90){
      setprogresscolor("#ed851c")
    }
    else{
      setprogresscolor("#ed1c1c")
    }

  },[progressval])

  const [progresscolor,setprogresscolor] = useState("#57aeb3")

  const togglesidebar = ()=>{
    const sidebar = document.getElementById("sidebar");
    if(opensidebar === false){
      setopensidebar(true)
      sidebar.classList.remove('d-none')
      setimg("https://img.icons8.com/ios-filled/50/FFFFFF/chevron-left.png")
    }
    else if(opensidebar === true){
      setopensidebar(false)
      sidebar.classList.add('d-none')
      setimg("https://img.icons8.com/ios-filled/50/FFFFFF/chevron-right.png")
    }
  }

  // const updatetargetedcal = (e)=>{
  //   settargetedcal(e.target.val)
  // }

  

  return (
    <>
    <button type="button" className="p-1" style={{top:"45px", border:"0px", backgroundColor:"#182748"}} onClick={togglesidebar}><img className='d-flex align-items-center' src={img} width="20px" alt=''/></button>
    <div id="sidebar" className="d-flex justify-content-start align-items-center flex-column d-none" style={{width:window.innerWidth <900? "60%":"25%",height:"91vh",boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", backgroundColor:"#F9FAFC",zIndex:window.innerWidth <950? "999":"",position:window.innerWidth <950? "absolute":""}}>
        <button type="button" className={`p-1 position-absolute start-100 translate-middle bg-danger ${window.innerWidth >950? "d-none": ""}`} style={{top:"45px", border:"0px"}} onClick={togglesidebar}><img className='d-flex align-items-center' src={img} width="20px" alt=''/></button>
        <span className='my-4 p-2' style={{border:"1px transparent", borderRadius:"20px", backgroundColor:"#182748", color:"#FFFFFF", boxShadow: "black 0px 2px 5px 0px"}}>Today's Consumption</span>
        <span className='p-2 d-flex justify-content-center align-items-center' style={{border:"1px transparent", backgroundColor:"#FFF9A6", color:"#182748"}}>Targeted Calories: {targetedcal}
          {/* <button type="button" class="btn p-0 mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-edit-100-most-used-icons-flaticons-flat-flat-icons-2.png" width="26px" alt=''/></button>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Set your targeted calories for weight loss</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <label htmlFor="">Targeted Calories: </label>
                  <input className='mx-2' type="number" value={targetedcal} onChange={updatetargetedcal}/>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-warning">Save changes</button>
                </div>
              </div>
            </div>
          </div> */}
        </span>
        <div className="container my-4 mx-2 d-flex flex-row justify-content-center align-items-center">
           <h1 style={{fontSize:"100px"}}>{totalcons.calories}</h1>
           <p>Kcal</p>
        </div>
        <div className="progress my-4" style={{width:"90%"}}>
          <div className="progress-bar" role="progressbar" style={{ width: `${progressval}%`, backgroundColor:progresscolor}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{progressval < 100?  `${progressval}%` : "100%"}</div>
        </div>
          <label className='fs-6' htmlFor="">Total Calories Consumed</label>
        <p className="card-title mt-5"><b>Total Protien:</b> {totalcons.protien} grams</p>
        <p className="card-title"><b>Total Fats:</b> {totalcons.fat} grams</p>
        <p className="card-title"><b>Total Carbohydrate:</b> {totalcons.carbs} grams</p>
    </div>
    </>
  )
}

export default Sidebar
