import React, { useState } from 'react'
import Metricbmi from './Metricbmi'
import Standardbmi from './Standardbmi'

const Bmi = () => {
    const [standardbmi,setstandardbmi] = useState(true)
    const standardtoggler = ()=>{
        if(standardbmi!==true){
            setstandardbmi(true)
        }
    }
    const Metrictoggler = ()=>{
        if(standardbmi===true){
            setstandardbmi(false)
        }
    }
  return (
    <>
    <div className="container d-flex justify-content-start align-content-start flex-column px-5">
        <div className='d-flex align-items-center flex-row'>
            <h1><b>What is BMI?</b></h1>
            <div className='mx-3'>
                <button type='button' className={`btn btn-dark mx-2 ${standardbmi === true? "disabled": ""}`} style={{backgroundColor:"#182748"}} onClick={standardtoggler}>Standard units</button>
                <button type='button' className={`btn btn-dark ${standardbmi === true? "": "disabled"}`} style={{backgroundColor:"#182748"}} onClick={Metrictoggler}>Metric units</button>
            </div>
        </div>
        <p className='my-3'>The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.</p>
        <p>The BMI calculation divides an adult's weight in kilograms by their height in metres squared. For example, A BMI of 25 means 25kg/m2.</p>
    </div>
    {standardbmi === true? <Standardbmi/>:<Metricbmi/>}
    
    
    </>
  )
}

export default Bmi
