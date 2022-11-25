import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { foodcontext } from '../context/FoodState'

const Signup = () => {
    const navigate = useNavigate()
    const {host} = useContext(foodcontext)
    const [credentials,setcredentials] = useState({name:"",gender:"",age:"",email:"",password:"",cpassword:""})

    const credentialshandler = (e)=>{
        setcredentials({...credentials, [e.target.id]: e.target.value})
    }

    const loginfunc = async (e)=>{
        e.preventDefault();

        const url = `${host}/auth/adduser`
      
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:credentials.name,gender:credentials.gender,age:credentials.age,email:credentials.email,password:credentials.password,})
        });
        const json = await response.json()
        console.log(json)
        if(json.success){
            localStorage.setItem("token",json.authtoken)
            navigate("/");
        }
        else{
            document.getElementById("alert").classList.remove("d-none");
            setTimeout(()=>{
              document.getElementById("alert").classList.add("d-none");
            },3000)
        }
    }

  return (
    <>
    <form onSubmit={loginfunc} className='container d-flex align-items-center flex-column my-5 w-75' style={{boxShadow: "rgba(99, 99, 99, 0.4) 0px 2px 8px 0px"}}>
        <h3 className='my-3 d-flex justify-content-center align-content-center' style={{color:"#182748",fontWeight:"bolder"}}>SIGNUP</h3>
        <div className="mb-2 row d-flex flex-column w-50">
            <label htmlFor="name">Name</label>
            <div>
            <input type="text" className="form-control" id="name" value={credentials.name} placeholder='Enter Your Name here' onChange={credentialshandler}/>
            </div>
        </div>
        <div className="mb-2 row d-flex flex-row w-50">
            <div className="mb-2 d-flex flex-column w-50">
            <label htmlFor="gender">Gender</label>
            <input type="text" className="form-control" id="gender" value={credentials.gender} placeholder='Enter Your Gender here' onChange={credentialshandler}/>
            </div>
            <div className="mb-2 d-flex flex-column w-50">
                <div>
                <label htmlFor="age">Age</label>
                <input type="number" className="form-control" id="age" value={credentials.age} placeholder='Enter Your Age here' onChange={credentialshandler}/>
                </div>
            </div>
        </div>
        <div className="mb-2 row d-flex flex-column w-50">
            <label htmlFor="email">Email</label>
            <div>
            <input type="email" className="form-control" id="email" value={credentials.email} placeholder='Enter Your Email here' onChange={credentialshandler}/>
            </div>
        </div>
        <div className="mb-2 row d-flex flex-column w-50">
            <label htmlFor="password">Password</label>
            <div>
            <input type="password" className="form-control" id="password" value={credentials.password} placeholder='Enter Your Password here' onChange={credentialshandler}/>
            </div>
        </div>
        <div className="mb-2 row d-flex flex-column w-50">
            <label htmlFor="cpassword">Confirm Password</label>
            <div>
            <input type="password" className="form-control" id="cpassword" value={credentials.cpassword} placeholder='Confirm your Password here' onChange={credentialshandler}/>
            </div>
        </div>

        <div id='alert' className="mb-2 my-2 row d-flex justify-content-center w-50 d-none">
            <div className='d-flex justify-content-start align-items-center'>
            <img className='img-fluid mx-2' src="https://img.icons8.com/emoji/48/000000/warning-emoji.png" alt='' style={{width:"24px"}}/>
            <label htmlFor=""> Please enter details correctly!</label>
            </div>
        </div>       

        <div className='mb-2 row d-flex justify-content-start align-items-center flex-row w-50'>
            <button type='submit' className={`btn btn-success w-25 mx-3 my-2 ${!credentials.password === credentials.cpassword? "disabled":""}`}>Signup</button>
            <Link className='w-50' to="/login"><center>Already have an account?</center></Link>
        </div>       
    </form>
    </>
  )
}

export default Signup

