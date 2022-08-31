const express = require('express')
require('dotenv').config();

const app = express()
const port = process.env.PORT; 

// Servir contenido estatico
app.use(express.static('public')); //le mandamos el path


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});