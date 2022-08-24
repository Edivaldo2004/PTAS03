const express = require('express');
const jwt = require('jsonwebtoken');
const { expressjwt: expressJWT} = require('express-jwt');
const cors = require('cors');
const cookieParser = require('cookie-parser');
//const { usuario } = require('./models');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(cors())
app.use(cookieParser())

app.get('/', async function(req, res){
    //var resultado = "teste"
    //res.json(resultado);
 // var resultado = await usuario.findAll();
  //res.json(resultado);
})

app.get('/autenticar', async function(req, res){
    res.render("autenticar")
    // var resultado = await usuario.findAll();
    //res.json(resultado);
  })

  app.post('/logar', async function(req, res){
    if(req.body.usuario == "adimin" && req.body.password == "123"){
    res.json("Vc foi logado")
  }else{
    res.json("Nome ou senha Inválidos")
  }
}
)
app.get('/inscrever', async function(req, res){
  res.render("inscrever")
}
)
  app.post('/deslogar', async function(req, res){
    //var resultado = await usuario.findAll();
    //res.json(resultado);
  })

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!')
});