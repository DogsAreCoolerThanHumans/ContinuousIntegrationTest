const router = require("express").Router();
const users = require("../db/users.json");
const path = require('path')

router.get('/users', (req,res)=>{
    res.status(200).json(users);
})

router.get('/users/:email',(req,res)=>{
    console.log(req.params);
    let user = users.find(u => u.email == req.params.email);
    if(user){
        res.send(user);
    }else{
        res.status(404).send({error: "no existe"})
    }
})

module.exports = router;