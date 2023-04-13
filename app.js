var express = require("express");
var cors = require('cors')
const axios = require('axios');
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
app.get("/login", cors(), (req, res, next) => {
    const code= req.query.code;
    // console.log({code})
    axios.post(`https://github.com/login/oauth/access_token?code=${code}&client_id=ecce956fd9692b9c24a6&client_secret=e9dac209dc7d2c6ef762cd389bd4ec2e6ab793c1`,null,{
        method: "post",
        headers: {
            Accept: "application/json"                 
        },
        } ).then((response)=>{
            res.send(JSON.stringify(response.data))
        }).catch((error)=>{
        // res.send(JSON.stringify(error.m))
        })
    
  });