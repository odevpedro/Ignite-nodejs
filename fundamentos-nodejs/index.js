const { response, request, query } = require('express');
const express = require('express')
const app = express();

app.use(express.json())




/**
 * GET - Buscar informação dentro do servidor
 * POST - Inserir informação no servidor
 * PUT - Alterar uma informação do servidor
 * DELETE - Deletar uma informação do servidor
 */

app.get("/courses", (req, res) => {
    const query = req.query;
    console.log(query);
    return res.json([ "curso 1", "curso 2", "curso 3"
    ]);
})


//Route params, identificar um recurso editar/deletar/buscar
//Query params, Paginação / Filtro
//Body Params, objetos passados para inserção/algeração


app.post("/courses", (req, res) =>{
    const body = req.body;
    console.log(body )
    return res.json(["Curso1", "Curso2", "Curso3", "Curso4"]);
})


app.put("/courses/:id", (req, res) =>{
    const {id} = req.params;
    console.log(id);
    return res.json(["OutraCoisa", "Curso2", "Curso3", "Curso4"]);

})

app.delete("/courses/:id", (req, res) => {
    return res.json(["OutraCoisa", "cursinho", "Curso4"]);

})


app.patch("/courses/:id", (req, res) => {
    return res.json(["OutraCoisa", "cursinho", "Curso3", "Curso4"]);

})
app.listen(3333);





