import React, { useState } from 'react'
import './SignUp.css'
import { Button } from '../../style.js/Button';
import { useNavigate } from 'react-router-dom';
const Login = () => {
const [email, setEmail]= React.useState('');
const [password, setPassword]= React.useState('');
const navigate = useNavigate();
const [error,setError] = useState(false)
const handleLogin=async()=>{
    if(!email && !password){
           setError(true)
           return false;
    }
    let result = await fetch('/login',{
        method:'post',
        body:JSON.stringify({email,password}),  
        headers:{
             'Content-Type':'application/json'
        },
    })
    result = await result.json() 
    console.warn(result);
    if(result.name){
         localStorage.setItem("user",JSON.stringify(result));
         navigate("/")
    }
    else{
        alert("User not found")
    }
 }
return (
<div className='center'>
<h2 className='si'>Log In</h2>
<input className="input" type="text"  placeholder='Enter Email'
onChange={(e)=>setEmail(e.target.value)} value={email}/>
{error && !email && <h3 className='validity'>Enter a vaild email</h3>}<br/>

<input className="input" type="password"  placeholder='Enter Password'
 onChange={(e)=>setPassword(e.target.value)} value={password} />
 {error && !password && <h3 className='validity'>Enter a vaild password</h3>}<br/>
<Button onClick={handleLogin} className="input" type="button">Login</Button>


</div>

)

}

export default Login