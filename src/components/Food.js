import React,{useContext, useEffect, useState} from 'react'
import { consumptioncontext } from '../context/Consumptionstate';
import { foodcontext } from '../context/FoodState'
import Fooditem from './Fooditem';
import Foodnotfound from './Foodnotfound';

const Food = () => {

const {food,getfood,host} = useContext(foodcontext) ;
let tempfood = food.slice(0)
let chktempfood = food.slice(0)

const {cons,getcons,fetchcons} = useContext(consumptioncontext);
const [category,setcategory] = useState("all")
const [searchval, setsearchval] = useState("")

useEffect(()=>{
  getcons();
  getfood();
  // eslint-disable-next-line
},[cons])

const addfood = async (currentfood,quantity)=>{

        currentfood['quantity'] = quantity;
        currentfood['calories'] = currentfood.calories * quantity;
        currentfood['fat'] = currentfood.fat * quantity;
        currentfood['protien'] = currentfood.protien * quantity;
        currentfood['carbs'] = currentfood.carbs * quantity;
  
        const url = `${host}/usercons/addcons`

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          },
          body: JSON.stringify(currentfood)
        });
        fetchcons();
        const json = await response.json();
        console.log(json)


  // setcons(cons.concat(currentfood))
}


const categorytoggler = (e)=>{
  e.preventDefault();
  if(e.target.id==="all"){
    setcategory("all")
  }
  else if(e.target.id==="ff"){
    setcategory("ff")
  }
  else if(e.target.id==="desi"){
    setcategory("desi")

  }
  else if(e.target.id==="fruits"){
    setcategory("fruits")

  }
  else if(e.target.id==="drink"){
    setcategory("drink")
  }

}

const onsearch = (e)=>{
  setsearchval(e.target.value)
}
let windowwidth = window.innerWidth;
chktempfood = chktempfood.filter(element => {return element.name.slice(0,searchval.length) === searchval.toLowerCase()})

  return (
    <>
    <div className="container my-2 d-flex justify-content-center align-items-center flex-column">
      <div className="input-group mb-3 w-75">
        <span className="input-group-text" id="inputGroup-sizing-default"><img className='img-fluid' src="https://img.icons8.com/3d-fluency/100/000000/search.png" alt='' style={{width:"24px"}}/></span>
        <input type="text" className="form-control" placeholder="Search your food here" aria-label="Recipient's username" aria-describedby="button-addon2" id='search' value={searchval} onChange={onsearch}/>
      </div>
      <div className="container d-flex justify-content-center mt-3">
        <a className='mx-2 p-2' href="/" style={{textDecoration:"none", color:"#182748", borderBottom: category === "all"? "2px solid #182748" : "", fontSize: windowwidth < 400? "3.5vw":""}} id="all" onClick={categorytoggler}>All</a>
        <a className='mx-2 p-2' href="/" style={{textDecoration:"none", color:"#182748", borderBottom: category === "ff"? "2px solid #182748" : "", fontSize: windowwidth < 400? "3.5vw":""}} id="ff" onClick={categorytoggler}>Fast Food</a>
        <a className='mx-2 p-2' href="/" style={{textDecoration:"none", color:"#182748", borderBottom: category === "desi"? "2px solid #182748" : "", fontSize: windowwidth < 400? "3.5vw":""}} id="desi" onClick={categorytoggler}>Desi</a>
        <a className='mx-2 p-2' href="/" style={{textDecoration:"none", color:"#182748", borderBottom: category === "fruits"? "2px solid #182748" : "", fontSize: windowwidth < 400? "3.5vw":""}} id="fruits" onClick={categorytoggler}>fruits</a>
        <a className='mx-2 p-2' href="/" style={{textDecoration:"none", color:"#182748", borderBottom: category === "drink"? "2px solid #182748" : "", fontSize: windowwidth < 400? "3.5vw":""}} id="drink" onClick={categorytoggler}>Drinks</a>
      </div>
    </div>
    <div className='container d-flex justify-content-center align-items-center flex-row'>
        <div className="row d-flex justify-content-center" style={{overflowY:"auto", height:"59vh"}}>
            {category !== "all"?                 
                tempfood.filter(element => {return element.category === category && element.name.slice(0,searchval.length) === searchval.toLowerCase()}).map((food)=>{
                  return <Fooditem food={food} key={food.name} addfood={addfood}/>

            }): 
                tempfood.filter(element => {return element.name.slice(0,searchval.length) === searchval.toLowerCase()}).map((food)=>{
                  return <Fooditem food={food} key={food.name} addfood={addfood}/>
            })}
            {chktempfood.length===0? <Foodnotfound/>: null}
            
        </div>
    </div>
    </>
  )
}

export default Food
