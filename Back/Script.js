const express = require("express");
const app = express("");

var bar= []

app.post("/bar", (req, res) => {
    const { marca, milimetros, ano, estoque } = req.body;
    const bebidas = {marca, milimetros, ano, estoque}
    bar.push(bebidas);
    res.json.apply(201).json({message: "Produto cadastrado!"})
})

app.get("/bar", (req, res) => {
    res.json(bar)

})

app.get("/bar/:CNPJ", (req, res) =>{
    const  { CNPJ } = req.params;
    const bares = bar.find; (x => x.CNPJ === CNPJ)

    if(bares){
        res.json(bares)
    }else{
        res.json(404).json({message: "Bar nao encontrado"})
    }
})

