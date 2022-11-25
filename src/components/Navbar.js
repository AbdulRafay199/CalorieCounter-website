import React, { useContext, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { foodcontext } from '../context/FoodState'
import Navimage from '../kisspng-foliar-feeding-leaf-nutrient-fertilisers-soil-5afdacea7fb3b2.0286005815265743145231.png'

const Navbar = () => {
  const navigate = useNavigate()
  const {host} = useContext(foodcontext)
  const [user,setuser] = useState("User")
  const getuser = async ()=>{
      const url = `${host}/auth/getuser`

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': await localStorage.getItem('token')
          },
        });
        const json = await response.json();
        setuser(json.name.toString())
  }
  getuser();
  

  const logout = (e)=>{
    e.preventDefault()
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light" style={{boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px", backgroundColor:"#42C3A7",zIndex:"999"}}>
    <div className="container-fluid" style={{marginLeft:"40px"}}>
        <img className='mx-2' src={Navimage} alt="" height="45" width="auto"/>
        <a className="navbar-brand" href="/" style={{fontWeight:"bolder",color:"#182748"}}>CalCount</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
        <form className="d-flex">
            <p className={`my-auto p-2 mx-3 fs-6 text-light ${localStorage.getItem('token')? "": "d-none"}`} style={{borderRadius:"1px",backgroundColor:"rgba(24,39,72,0.5)"}}>{localStorage.getItem('token')? user: ""}</p>
            <Link className={`btn btn-danger ${!localStorage.getItem('token')? 'd-none': ""}`} type="submit" onClick={logout}>Logout</Link>
            <div className={`${!localStorage.getItem('token')? '': "d-none"}`}>
              <Link className="btn btn-dark mx-2" type="submit" to="/login" onClick={getuser}>Login</Link>
              <Link className="btn btn-dark" type="submit" to="/signup" onClick={getuser}>Signup</Link>
            </div>
        </form>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar
