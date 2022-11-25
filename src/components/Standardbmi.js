import React, { useEffect, useState } from 'react'

const Standardbmi = () => {

    const [bmidetails,setbmidetails] = useState({weight:"",height:"",bmi:"0"})

    useEffect(()=>{
        console.log(bmidetails)
    },[bmidetails])

    const changebmi = (e)=>{
        setbmidetails({...bmidetails, [e.target.id] : e.target.value})
        
    }

    const calculatebmi = ()=>{
        const meterheight = (parseInt(bmidetails.height))/100;
        let tempbmi = ((parseInt(bmidetails.weight))/(meterheight*meterheight))*703
        tempbmi = tempbmi.toString().slice(0,4)
        setbmidetails({weight: bmidetails.weight,height: bmidetails.height,bmi: tempbmi})
    }

  return (
    <>
    <div className="container p-4">
        <div className="mb-3 d-flex flex-column">
        <label htmlFor="weight" className="form-label">Weight:</label>
        <input type="text" className="form-control" id="weight" placeholder="Enter your Weight in pounds" value={bmidetails.weight} onChange={changebmi}/>
        </div>
        <div className="mb-3 d-flex flex-column">
        <label htmlFor="height" className="form-label">Height:</label>
        <input type="text" className="form-control" id="height" placeholder="Enter your height in inch" value={bmidetails.height} onChange={changebmi}/>
        </div>
        <button type='button' className='btn btn-dark' onClick={calculatebmi} style={{backgroundColor:"#182748"}}>Calculate BMI</button>
        <div className="mb-3 d-flex justify-content-center align-items-center flex-row ">
        <label htmlFor="bmi" className="form-label mx-2 fs-4">Your BMI:</label>
        <h4 className='fs-2' id="bmi">{bmidetails.bmi}</h4>
        </div>
    </div>

      
    </>
  )
}

export default Standardbmi
