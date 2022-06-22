const express = require('express');
const { v4: uuidv4 } = require('uuid')
const app = express();

app.use(express.json());
const custumers = [];

/*
 cpf - string | name - string | id - uuid | statement []
*/

app.post("/account", (req, res) => {
    const { cpf, name } = req.body;

    const customerAlreadyExists = custumers.some(
        (customer) => customer.cpf === cpf);
    
    if(customerAlreadyExists){
        return res.status(400).json({error: "Customer already Exists"});
    }
    
    custumers.push({
        cpf, name, id:uuidv4(), statment: []
        
    });

    return res.status(201).send();
    
});

app.listen(3333);