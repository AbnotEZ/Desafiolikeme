const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());


// middleware
app.use(express.static(__dirname + "/public/static"));

app.get("/", (req, res) => {
    res.send("estas solicitando la ruta raiz");
    });






app.listen(3000, console.log("SERVER ON 👌"));