// Importing required modules
const express = require('express');
const { json } = require('express/lib/response');

// Creating an Express application
const app = express();

// Define a route handler for the root path
// Zoe y Tiago
app.get('/grupo1', (req, res) => {
    const jsonResponse = {
        targetTemperature: 40,
        toleranceRange: 5,
        fanActive: false,
        lampOn: true,
        currentTemperature: 36
    }
  res.json(jsonResponse);
});


// Valen
app.get('/grupo2', (req, res) => {
  const jsonResponse = {
      scaleWeight: 200,
      motorPosition: {
        degreesInXAxis: 320,
        degreesInYAxis: 120,
      }
  }
res.json(jsonResponse);
});

// Marquinhos
app.get('/grupo3', (req, res) => {
  const jsonResponse = {
    "cuentaMetalicasAltas": 10,
    "cuentaMetalicasBajas": 10,
    "cuentaNoMetalicasAltas": 10,
    "cuentaNoMetalicasBajas": 10,

    "fotoelectrico1": true,
    "fotoelectrico2": false,
    "capacitivo": true,
    "inductivo": false,
    
    "motor": false,
    "fase": 4
  }
  res.json(jsonResponse);
});


// Facu
app.get('/grupo4', (req, res) => {
  const jsonResponse = {
      current: {
          high: false,
          metallic: true
      },
      count: {
        metallicHigh: 20,
        metallicLow: 15,
        nonMetallicHigh: 12,
        nonMetallicLow: 15,
      }  

  }
res.json(jsonResponse);
});


// Ger
app.get('/grupo5', (req, res) => {
  const jsonResponse = {
      position: {
        x: 15,
        y: 30
      },
      velocity: 12
  }
res.json(jsonResponse);
});


// Facu
app.get('/grupo6', (req, res) => {
  const jsonResponse = {
    drink1: 20,
    drink2: 60,
    drink3: 50,
    drink4: 10,
  }
res.json(jsonResponse);
});


const port = process.env.PORT || 4000
// Start the server on port 4000
app.listen(port, '0.0.0.0', () => {
  console.log('Server is listening on port 4000');
});