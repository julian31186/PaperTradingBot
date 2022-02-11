import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { Stock } from '../model/stock';
dotenv.config();

//This function
async function ticker(tickerSymbol: string): Promise<Stock | 0> {
	var url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${tickerSymbol}&apikey=${process.env
		.STOCK_API_KEY}`;
	const response = await fetch(url);
	const data = await response.json();
	let stock = new Stock(data);
	console.log(stock);
	console.log(url);

	if (stock === null) {
		return 0;
	}
	return stock;
}

export default ticker;
