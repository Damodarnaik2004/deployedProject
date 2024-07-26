import React, {  useState,useEffect } from 'react'
import { Button } from '../../style.js/Button';
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
     const navigate = useNavigate();  // used to redirect
     const [name,setName] = useState("");
     const [username,setUsername] = useState("");
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");

     useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
           navigate('/')
        }
     })
    
     const Data=async()=>{
            //console.warn(name,username,email,password);
            let result = await fetch('http://localhost:8000/signup',{
                method:'post',
                body:JSON.stringify({name,username,email,password}),  
                headers:{
                     'Content-Type':'application/json'
                },
            })
            result = await result.json()   
            console.warn(result);
            localStorage.setItem("user",JSON.stringify(result))
            if(result){
               navigate('/')
            }
     }
  return (
    <div >
          <div className='center'>
          <h2 className='si'>Sign Up</h2>

          <input  className="input"type='text' placeholder='Name'
          value={name} onChange={(e)=>setName(e.target.value)}/><br/>
          <input className="input"type='text' placeholder='Username'
          value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
          <input className="input" type='email' placeholder='Email'
          value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
          <input className="input" type='password' placeholder='Password'
          value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
          <Button className="input" onClick={()=>Data()}>Submit</Button>
          </div>
    </div>
  )
}

export default SignUp