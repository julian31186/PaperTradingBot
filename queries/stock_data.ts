'use strict';
var request = require('request');
import dotenv from 'dotenv'
dotenv.config()


function ticker(tickerSymbol:String) {
  var url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${tickerSymbol}&apikey=${process.env.API_KEY}`;

  request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err:Error, res: any, data:Object) => {
    if (err) {
      console.log('Error:', err);
    } else if (Object.keys(data).length === 0) {
     return 0;
    } else {
      // data is successfully parsed as a JSON object:
      console.log(data);
    }
  });
  return(url);
}


export default ticker;
