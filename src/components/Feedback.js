import React from 'react'

const Feedback = () => {
  return (
    <>
    <div className="mb-3 w-100">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>

    <div className="mb-3 w-100">
        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
      
    </>
  )
}

export default Feedback
