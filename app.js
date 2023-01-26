const express = require('express');
const app = express();
const port = 3000;
const people_contacts = require('./model/contacts');

app.get('/',(req,res)=>{
    res.send('Welcome to our page!!! You can store your contacts!');
});

app.get('/contacts',(req,res)=>{
    res.send(people_contacts);
});

app.listen(port,function(){
    console.log(`Server running at ${port}`);
});
