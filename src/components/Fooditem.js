import React, {useState} from 'react'

const Fooditem = (props) => {
  const [quantity,setquantity] = useState(1);
  const onchangequantity = (e)=>{
    setquantity(e.target.value)
  }
  return (
    <>
    <div className="col-sm-12 col-md-4 col-lg-4 col-xxl-3" style={{width:"18rem"}}>
        <div className="card mt-4" style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
            <img src={props.food.img} className="card-img-top mx-auto my-2" alt="..." style={{width:"40%", borderRadius:"50%"}}/>
            <div className="card-body mx-auto" style={{textAlign:"center", color:"#182748",lineHeight:"12px"}}>
                <p className="card-text"><b>Name:</b> {props.food.name}</p>
                <p className="card-text"><b>Calories:</b> {props.food.calories}</p>
                <p className="card-text"><b>Protien:</b> {props.food.protien}</p>
                <p className="card-text"><b>Fat:</b> {props.food.fat}</p>
                <p className="card-text"><b>carbohydrates:</b> {props.food.carbs}</p>
                <div className='container d-flex justify-content-center align-items-center flex-row my-2'>
                  <p className="card-text my-auto mx-2"><b>Quantity:</b></p>
                  <input className='w-25 text-center' type="number" value={quantity} onChange={onchangequantity} style={{backgroundColor:"rgba(24,39,72,0.3)", borderRadius:"15px"}}/>
                </div>
                <button className="btn btn-outline-success" onClick={()=>{props.addfood(props.food,quantity)}}>Add Food</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Fooditem
