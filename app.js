const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Olá, minha imagem!')
});

app.listen(port, (error) => {
    if(error){
        console.log("Erro ao criar servidor!");
    }else{
        console.log(`Server running on port ${port}`);
    }
});