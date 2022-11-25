import React from 'react'

const Consitem = (props) => {

  const dt = new Date(props.food.date).toLocaleString();

  return (
    <>
    <div className="col-sm-12 col-md-4 col-lg-4 col-xxl-3" style={{width:"18rem"}}>
        <div className="card my-4 position-relative" style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
            <button type="button" className="btn-close position-absolute top-0 start-100 translate-middle bg-danger" aria-label="Close" onClick={()=>{props.close(props.food._id)}}></button>
            <img src={props.food.img} className="card-img-top mx-auto my-2" alt="..." style={{width:"30%", borderRadius:"50%"}}/>
            <span className="badge bg-dark mx-auto">{dt}</span>
            <div className="card-body mx-auto" style={{textAlign:"center", color:"#182748",lineHeight:"10px"}}>
                <p className="card-text"><b>Name:</b> {props.food.name}</p>
                <p className="card-text"><b>Calories:</b> {props.food.calories}</p>
                <p className="card-text"><b>Protien:</b> {props.food.protien}</p>
                <p className="card-text"><b>Fat:</b> {props.food.fat}</p>
                <p className="card-text"><b>carbohydrates:</b> {props.food.carbs}</p>
                <p className="card-text"><b>Quantity:</b> {props.food.quantity}</p>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Consitem
