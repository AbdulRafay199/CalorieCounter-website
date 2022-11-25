import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { foodcontext } from '../context/FoodState'

const Login = () => {
    const navigate = useNavigate()
    const {host} = useContext(foodcontext)
    const [credentials,setcredentials] = useState({email:"",password:""})

    const credentialshandler = (e)=>{
        setcredentials({...credentials, [e.target.id]: e.target.value})
    }

    const loginfunc = async (e)=>{
        e.preventDefault();

        const url = `${host}/auth/login`
      
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
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
    <form onSubmit={loginfunc} className='container d-flex align-items-center flex-column my-5' style={{width:"50%", boxShadow: "rgba(99, 99, 99, 0.4) 0px 2px 8px 0px"}}>
        <h3 className='mt-5 d-flex justify-content-center align-content-center' style={{color:"#182748",fontWeight:"bolder"}}>LOGIN</h3>
        <div className="mb-3 row d-flex flex-column w-50">
            <label htmlFor="email" className="my-2">Email</label>
            <div>
            <input type="email" className="form-control" id="email" value={credentials.email} placeholder='Enter Your Email here' onChange={credentialshandler}/>
            </div>
        </div>
        <div className="mb-3 row d-flex flex-column w-50">
            <label htmlFor="password" className="my-2">Password</label>
            <div>
            <input type="password" className="form-control" id="password" value={credentials.password} placeholder='Enter Your Password here' onChange={credentialshandler}/>
            </div>
        </div>

        <div id='alert' className="mb-3 my-2 row d-flex justify-content-center w-50 d-none">
            <div className='d-flex justify-content-start align-items-center'>
            <img className='img-fluid mx-2' src="https://img.icons8.com/emoji/48/000000/warning-emoji.png" alt='' style={{width:"24px"}}/>
            <label htmlFor=""> Please enter correct Email and Password</label>
            </div>
        </div>       

        <div className='mb-3 row d-flex w-0'>
            <button type='submit' className={`btn btn-success my-2`}>Login</button>
            <Link to="/signup"><center>Create an account?</center></Link>
        </div>       
    </form>
    </>
  )
}

export default Login
