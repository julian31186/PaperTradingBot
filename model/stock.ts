export class Stock {
	name: String;
	price: Number;
	priceHigh: Number;
	priceLow: Number;
	volume: Number;

	constructor(response: any) {
		this.name = response['Global Quote']['01. symbol'];
		this.price = response['Global Quote']['05. price'];
		this.priceHigh = response['Global Quote']['03. high'];
		this.priceLow = response['Global Quote']['04. low'];
		this.volume = response['Global Quote']['06. volume'];
	}
}
