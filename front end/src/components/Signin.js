import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
      const auth = localStorage.getItem('users');
      if(auth){
        navigate('/service');
      }
    })

    const collectData = async() =>{
      console.log(name,email,password);
      let result = await fetch('http://localhost:5000/signin', {
        method:'post',
        body: JSON.stringify({ name, email, password }),
        headers: {
          'Content-Type':'application/json'
        },
      });
      result = await result.json();
      console.log(result);
      localStorage.setItem("users",JSON.stringify(result));
      navigate('/service')
        
    }

  return (
    <div>
      <section className="visit" id="visit" style={{padding:"50px 50px"}}>

        <div className="row">

        <form action="">
            <h3>Register YourSelf !!</h3>
            <div className="inputBox">
            <input type="text" value = {name} onChange = {(e) => setName(e.target.value)} placeholder='Enter your name'  />
            </div>
            <div className="inputBox">
            <input type="email" value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder='Enter your E-Mail' />
            </div>
            <div className="inputBox">
            <input type="password" value = {password} onChange = {(e) => setPassword(e.target.value)} placeholder='Enter your Password'  />
            </div>
            
            <button onClick = {()=>{collectData()}} className="btn" >Register</button>
        </form>

        <div className="image" >
            <img style={{height:"80%", width:"50%"}} src="images/contact1.png" alt="" />
        </div>

        </div>

        </section>

    </div>
  )
}

export default Signin
