import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const server = express();
const port = 3333;

server.use(express.json());
server.use(cors());

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"loja_virtual"
})



server.get("/featured", (req, res) => {
    
    connection.query("SELECT * FROM featured", (error, result) => {
        if (error){
            res.send("Erro na conexão com o Banco de Dados!!!")
        }else {
            res.send(result)
        }
    })
});

server.post("/featured", (req,res) => {

})

server.listen(port, () => {
    console.log(`API NodeJS rodando em http://localhost:${port}`)
}) 