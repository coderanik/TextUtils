import React, { useState } from 'react'

export default function About() {

  const [mycolor, setMyColor] = useState({
    color: 'black',
    backgroundColor : 'white',
  })

  const [btText,setBtText]= useState("Enable Dark Mode");

  const toggleStyle =()=>{
    if(mycolor.color === 'black'){
      setMyColor({
        color:'white',
        backgroundColor:'black'
      })
      setBtText("Enable Light Mode");
    }
    else{
      setMyColor({
        color:'black',
        backgroundColor:'white'
      })
      setBtText("Enable Dark Mode");
    }
  }

  return (
    <>
        <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container " style={mycolor}>
        <div className="row justify-content-center">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-4">About Us</h2>
            <p className="mb-4">
              Welcome to our company! We are passionate about delivering innovative solutions that empower individuals and businesses. With a dedicated team of experts, we strive to exceed expectations and create a lasting impact in our industry.
            </p>
            <p>
              Our mission is to provide exceptional service, foster innovation, and build strong relationships with our clients. Together, we aim to achieve greatness and drive positive change.
            </p>
            <a href="#learn-more" className="btn btn-primary mt-3">Learn More</a>
            
            <button type="button" class="btn btn-primary my-3" onClick={toggleStyle}>{btText}</button>
            
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
