import {createContext, React,  useState } from "react";
const foodcontext = createContext();

const FoodState = (props) => {

    const initfood = []
    const [food,setfood] = useState(initfood);
    const host = "http://localhost:5000"

    const getfood = async ()=>{

      const url = `${host}/food/getfood`

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          
        },
      });
      const json = await response.json();
      setfood(json)
    }
    

  return (
    <foodcontext.Provider value={{food,setfood,getfood,host}}>
        {props.children}
    </foodcontext.Provider>
  )
}

export default FoodState;
export {foodcontext};