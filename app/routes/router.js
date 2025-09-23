var express = require("express");
var router = express.Router();
const fs = require("fs").promises;
const path = require("path");

router.get("/", async function (req, res) {
    let lista = [];
    try{
        lista = await fs.readdir(path.resolve(process.cwd(), 'app/public/imagens/galeria-prod'));
        console.table(lista)
    }catch(err){
        console.log(err);
    }
    res.render("pages/index",{listaImagens:lista})
});

router.post("/", function (req, res) {


});



module.exports = router;