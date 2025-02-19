const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config();


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
	res.json({ledstate: led})
})

app.get('')



app.post('/eventosLed', (req,res)=>{
	console.log(req.body.state)
	var led = req.body.state 
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
