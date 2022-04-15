import DiscordJS, { Intents } from 'discord.js';
import dotenv from 'dotenv';
require('./config/mongoConfig');
const { UserModel, OrderModel } = require('./config/schema');
dotenv.config();

const client = new DiscordJS.Client({
	intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ]
});

client.on('ready', () => {
	console.log('Bot Ready!');
});

//should be seperated into it's own file
client.on('messageCreate', async (message) => {
	if (message.content === '$create') {
		let isCreated = await UserModel.findOne({ user_id: message.author.id });
		if (isCreated) {
			message.channel.send('You already have an account!');
		} else {
			let newUser = new UserModel({
				user_id: message.author.id
			});
			newUser.save();
			message.channel.send('Account created!');
		}
	}
	if (message.content === '$buy') {
		const user = await UserModel.findOne({ user_id: message.author.id });
		if (!user) {
			message.channel.send('You do not have an account!');
		}
		let newOrder = new OrderModel({
			ticker: 'AAPL',
			amount: 1,
			price: 100
		});
		user.orders.push(newOrder);
		user.save();
		message.channel.send('Order created!');
	}
});

client.login(process.env.TOKEN);
