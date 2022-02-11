export class Stock{
    name: String;
    price: Number;
    priceHigh: Number;
    priceLow: Number;
    volume: Number;

    constructor(response:any) {
        this.name = response.GLOBAL_QUOTE.symbol;
        this.price = response.GLOBAL_QUOTE.price;
        this.priceHigh = response.GLOBAL_QUOTE.high;
        this.priceLow = response.GLOBAL_QUOTE.low;
        this.volume = response.GLOBAL_QUOTE.volume;
    }
}

