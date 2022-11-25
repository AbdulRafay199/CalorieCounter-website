import React, { createContext, useState } from 'react'
const consumptioncontext = createContext();

const Consumptionstate = (props) => {

    const initcons = []
    const [cons,setcons] = useState(initcons);
    const [totalcons, settotalcons] = useState({calories:0,fat:0,protien:0,carbs:0})
    const [overallcons, setoverallcons] = useState({calories:0,fat:0,protien:0,carbs:0})
    const host = "http://localhost:5000"
    
    const getcons = ()=>{
      const temptotalcons = {calories:0,fat:0,protien:0,carbs:0}
      let date = new Date().getDate();
      // console.log(date)
      
      for (let i = 0; i < cons.length; i++) {
        const element = cons[i];
        // const consdate = parseInt(element.date.slice(8,10)) 
        const consdate = new Date(element.date).getDate() 
        // console.log(consdate === date)
        if(consdate === date){
          temptotalcons.calories = temptotalcons.calories + element.calories;
          temptotalcons.fat = temptotalcons.fat + element.fat;
          temptotalcons.protien = temptotalcons.protien + element.protien;
          temptotalcons.carbs = temptotalcons.carbs + element.carbs;
        }
        else{
          continue;
        }
      }
      settotalcons(temptotalcons);
    }

    const getoverallcons = ()=>{
      const tempoverallcons = {calories:0,fat:0,protien:0,carbs:0}
      
      for (let i = 0; i < cons.length; i++) {
          const element = cons[i];
          tempoverallcons.calories = tempoverallcons.calories + element.calories;
          tempoverallcons.fat = tempoverallcons.fat + element.fat;
          tempoverallcons.protien = tempoverallcons.protien + element.protien;
          tempoverallcons.carbs = tempoverallcons.carbs + element.carbs;      
      }
      setoverallcons(tempoverallcons);
    }

    const fetchcons = async ()=>{

        const url = `${host}/usercons/fetchcons`

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': await localStorage.getItem('token')
            
          },
        });
        const json = await response.json();
        setcons(json)
        // console.log(json)
    }



  return (
    <consumptioncontext.Provider value={{cons,setcons,totalcons,getcons,overallcons,getoverallcons,fetchcons,host}}>
        {props.children}
    </consumptioncontext.Provider>
  )
}

export default Consumptionstate;
export {consumptioncontext};
