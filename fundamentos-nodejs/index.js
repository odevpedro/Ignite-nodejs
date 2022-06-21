const { response } = require('express');
const express = require('express')
const app = express();




/**
 * GET - Buscar informação dentro do servidor
 * POST - Inserir informação no servidor
 * PUT - Alterar uma informação do servidor
 * DELETE - Deletar uma informação do servidor
 */

app.get("/courses", (req, res) => {
    return res.json([
        "curso 1",
        "curso 2", 
        "curso 3"
    ]);
})



app.post("/courses", (req, res) =>{
    return res.json(["Curso1", "Curso2", "Curso3", "Curso4"]);
})


app.put("/courses/:id", (req, res) =>{
    return res.json(["OutraCoisa", "Curso2", "Curso3", "Curso4"]);

})

app.delete("/courses/:id", (req, res) => {
    return res.json(["OutraCoisa", "cursinho", "Curso4"]);

})


app.patch("/courses/:id", (req, res) => {
    return res.json(["OutraCoisa", "cursinho", "Curso3", "Curso4"]);

})
app.listen(3333);




