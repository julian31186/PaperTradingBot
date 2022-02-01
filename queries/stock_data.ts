'use strict';
var request = require('request');
import dotenv from 'dotenv'
dotenv.config()

ticker('AMD');

function ticker(tickerSymbol:String) {
  var url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${tickerSymbol}&apikey=${process.env.API_KEY}`;

  request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err:Error, res: any, data:Object) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      console.log(data);
    }
  });


  console.log(url);
}



