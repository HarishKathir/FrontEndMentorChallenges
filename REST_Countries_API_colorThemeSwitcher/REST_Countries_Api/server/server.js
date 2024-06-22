const express = require('express');
const app =  express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const port = 3002;

//middleware
app.use(cors());

//Endpoint to fetch data
app.get('/data',(req,res) =>{
    const filePath = path.join(__dirname,'..','..','FEM_Starter','data.json');
    fs.readFile(filePath,'utf-8',(err,data) =>{
        if(err){
            res.status(500).json({err, error: "Failed to read data"});
            return;
        }
        res.setHeader("Content-Type","application/json");
        res.send(data);
    })
})

app.listen(port , () => {
    console.log(`server running at ${port}`);
})