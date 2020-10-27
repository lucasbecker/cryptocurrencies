const express = require('express');
const cors = require('cors');
const axios = require('axios');

const api = require('./token.json');
const requestConfig = {
  method: 'GET',
  url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map',
  headers: { 'X-CMC_PRO_API_KEY': api.key },
  json: true
};

const app = express();

app.use(cors());

app.get('/', async (req, res) => {

  try{
    let response = await axios(requestConfig);
    return res.json( response.data )

  }catch(error){
    console.error(error);

  }
})

app.listen('5050', () => console.log('Server-side funfando!'));
