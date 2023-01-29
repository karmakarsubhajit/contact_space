const express = require('express');
const app = express();
const port = 3000;
const people_contacts = require('./data/contacts');
const people_contacts_id = require('./data/contacts_id');
const Contact = require('./models/contactschema');

const mongoose = require('mongoose');

const url = `mongodb+srv://nodedbuser:mongopassword@cluster0.kf6pqes.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    });


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

app.post('/contacts',(req,res)=>{
  const contact = new Contact({
    id:req.params.id,
    name: req.params.name,
    phone: req.params.phone,
    country: req.params.country,
    gender:req.params.gender
  });
  contact.save((err,contact)=>{
    if(err){
        res.send(err);
    }
    res.send(json);
  });
});


app.listen(port,function(){
    console.log(`Server running at ${port}`);
});

