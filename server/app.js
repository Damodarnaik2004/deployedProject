require('dotenv').config();

const PORT = process.env.PORT;
const URL = process.env.URL;

console.log(PORT);
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path')
const User = require('./model/user.model.js')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "fullecom", "build")));
mongoose.connect(URL)
.then(res =>console.log("connected, oh ya"))
.catch(err => console.error(err))

app.get('/',(req,res)=>{
    res.send('listening');
})

app.post('/signup',async(req,res)=>{
       const user = new User(req.body);
       let result = await user.save();
       // here we can't use select to not send password
       result = result.toObject();
       delete result.password
       res.send(result);
})

app.post('/login',async(req,res)=>{
      if(req.body.password && req.body.email){
      let user = await User.findOne(req.body).select("-password");
      if(user){
      res.send(user);
      }else{
        res.send({result:"no user found"})
      }
    }else{
        res.send({result:"no user found"})
    }
})



app.listen(PORT,()=>{
    console.log(`linstening on ${PORT}`)
})