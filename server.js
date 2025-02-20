const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs')

var led = OFF;

app.get('/', (req, res)=> {
  res.render('index');
})

app.get('/state/:temperatura/:humedad', (req, res)=>{
  console.log(req.params.temperatura)
  console.log(req.params.humedad)
  console.log(led)
  res.send(led)  
})

app.post('/eventosLed', (req,res)=>{
  led = req.body.state
  console.log(req.body.state)
  console.log(led)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
