const express = require('express')
const app = express()
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
dotenv.config();
var led = "OFF";
var humedad;
var temperatura;
app.get('/', (req, res)=> {
  res.render('index');
})
app.get('/state/:temperatura/:humedad', (req, res)=>{
  humedad = req.params.humedad
  temperatura = req.params.temperatura
  res.send(led)  
  console.log(`
  *Consulta realizada: Estado LED y set de temp&humedad.*
  -LED: ${LED}
  -TEMP: ${temperatura}
  -HUMEDAD: ${humedad}
  `)
})
app.post('/eventosLed', (req,res)=>{
  led = req.body.state
  console.log(`
  *Consulta realizada: Definicio del estado LED*
  -LED: ${led}
  `)
})
app.get('/tiempo', (req,res)=>{
  res.json({
    "temperatura": temperatura,
    "humedad": humedad
  })
  console.log(`
  *Consulta realizada: Solicitud del estado de la temp&humd.*
  -TEMP: ${temperatura}
  -HUMD: ${humedad}
  `)
})
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
