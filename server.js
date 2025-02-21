const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs')

var led = "OFF";
var humedad;
var temperatura;
app.get('/', (req, res)=> {
  res.render('index');
})

app.get('/state/:temperatura/:humedad', (req, res)=>{
  console.log(req.params.temperatura)
  console.log(req.params.humedad)
  humedad = req.params.humedad
  temperatura = req.params.temperatura
  console.log(led)
  res.send(led)  
})

app.post('/eventosLed', (req,res)=>{
  led = req.body.state
  console.log(req.body.state)
  console.log(led)
})
app.get('/tiempo', (req,res)=>{
  res.json({
    "temperatura": temperatura,
    "humedad": humedad
  })
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
