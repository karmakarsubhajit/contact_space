const express = require('express');
const app = express();
const port = 3000;
const people_contacts = require('./model/contacts');
const people_contacts_id = require('./model/contacts_id');

app.get('/',(req,res)=>{
    res.send('Welcome to our page!!! You can store your contacts!');
});

app.get('/contacts',(req,res)=>{
    res.send(people_contacts);
});

app.get('/contacts/:id',(req,res)=>{
    console.log(req.params.id);
    var obj = {} 
    for (let i = 0; i < people_contacts_id.length; i++) {
        if(people_contacts_id[i].id==req.params.id)
            obj = people_contacts_id[i]
      } 
    res.send(obj);
});

app.listen(port,function(){
    console.log(`Server running at ${port}`);
});

