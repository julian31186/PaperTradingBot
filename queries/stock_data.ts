'use strict';
var request = require('request');
import dotenv from 'dotenv'
import {Stock} from '../model/stock'
import AlphaVantage from "alphavantage-ts";
const alpha = new AlphaVantage(process.env.API_KEY);
dotenv.config()


function ticker(tickerSymbol:string) {
  return(alpha.stocks.search(tickerSymbol));
}


export default ticker;
