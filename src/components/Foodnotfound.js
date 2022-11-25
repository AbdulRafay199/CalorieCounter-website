import React from 'react'
import notfound from '../pngaaa.com-938998.png'


const Foodnotfound = () => {
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center flex-column">
        <img className='img-fluid mx-auto' src={notfound} alt="" style={{width:"250px"}}/>
        <h2>Couldn't find your keywords!</h2>
        <p>Please try other keywords or change the category you are searching in.</p>
    </div>
      
    </>
  )
}

export default Foodnotfound
