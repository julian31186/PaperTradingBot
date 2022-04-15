import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/stock_trader');
mongoose.connection.on('connected', () => {
	console.log('Connected to monogoDB');
});

module.exports = { mongoose };
