const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))


var led;


// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.get('/', (req, res)=> {
	res.render('index');
})

app.get('/state', (req, res)=>{
	res.send(led)
})


app.post('/eventosLed', (req,res)=>{
	console.log(req.body.state)
	var led = req.body.state 
})

app.listen(8080, () => {
  console.log(`Ejecutando`)
})