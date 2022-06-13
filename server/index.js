const express = require("express");
const app = express();
const mysql = require("mysql");
//para não dar problema na ligação
const cors = require("cors");

//criando um banco de dados do MySQL 
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "automoveis",
});

app.use(express.json());
app.use(cors());

//enviar os dados do modal
app.post("/adicionar", (req, res) => {
  const { veiculo } = req.body;
  const { marca } = req.body;
  const { ano } = req.body;
  const { vendido } = req.body;
  const { descricao } = req.body;
  
  let sql = "INSERT INTO carro (veiculo, marca, ano, vendido, descricao) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [veiculo, marca, ano, vendido, descricao],(err, result)=> {
    res.send(result);
  });
});

//mostrar todos os dados do banco de dados
app.get('/listar', (req, res)=> {
  
  let sql = "SELECT * FROM carro ";
  db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
  })
});

//alterar os dados
app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { veiculo } = req.body;
  const { marca } = req.body;
  const { ano } = req.body;
  const { vendido } = req.body;
  const { descricao } = req.body;
  
  let sql = "UPDATE carro SET veiculo = ?, marca = ?, ano = ?, vendido = ?, descricao = ? WHERE id = ?";
  db.query(sql, [id, veiculo, marca, ano, vendido, descricao], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let sql = "DELETE FROM carro WHERE id = ?";
  db.query(sql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//porta para funcionar
app.listen(8000, ()=>{
  console.log('Servidor funcionando!!!')
})
