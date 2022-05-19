const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const port = 5000

app.get('/', (req, res) => {
  res.send(' esta es mi primera app web express ')
})


app.post('/register', (req, res) => {
  let name = req.body.name;
  let apellido = req.body.apellido
  let password = req.body.password;
  let email = req.body.email
  let ciudad = req.body.ciudad
  let domicilio = req.body.domicilio
  
  res.send(`su Nombre es: ${name}, su Apellido es: ${apellido}, su Email es: ${email}, su Password es: ${password}, su Ciudad es: ${ciudad}, su Domicilio es: ${domicilio}`);
})



app.post('/login', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;

  res.send(`su Nombre es:  ${name}, su Email es:  ${email}`);
})



app.listen(port, () => {
  console.log(`listo para ejecutar en puerto ${port}`)
})