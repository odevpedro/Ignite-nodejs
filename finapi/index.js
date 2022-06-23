const express = require('express');
const { v4: uuidv4 } = require('uuid')
const app = express();

app.use(express.json());
const custumers = [];

/*
 cpf - string | name - string | id - uuid | statement []
*/

//Criando conta
app.post("/account", (req, res) => {
    const { cpf, name } = req.body;

    const customerAlreadyExists = custumers.some(
        (customer) => customer.cpf === cpf);
    
    if(customerAlreadyExists){
        return res.status(400).json({error: "Customer already Exists"});
    }
    
    custumers.push({
        cpf, name, id:uuidv4(), statement: [],
        
    });

    return res.status(201).send();
    
});

//pegando extrato bancário
app.get("/statement", (req, res) => {
    const { cpf } = req.headers;

    const customer = custumers.find(customer => customer.cpf === cpf );

    if(!customer){
        return res.status(400).json({error: "customer not found"})
    }

    return res.json(customer.statement);

})

app.listen(3333);