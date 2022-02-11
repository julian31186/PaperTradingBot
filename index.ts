import DiscordJS, { Intents, Interaction, MessageEmbed } from 'discord.js';
import { PrivacyLevels } from 'discord.js/typings/enums';
import dotenv from 'dotenv';
import ticker from './queries/stock_data';

dotenv.config();

const client = new DiscordJS.Client({
	intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ]
});

client.on('ready', () => {
	console.log('Bot Ready!');
	let stock = ticker('AMD');
	console.log(stock);

	const guildId = '494677400173674505';
	const guild = client.guilds.cache.get(guildId);
	//I dont know what the code blow does but i don't think it's needed. Watch the video and follow along, from what i saw it's good

	// let commands
	// if (guild) {
	// 	commands = guild.commands
	// } else {
	// 	commands = client.application?.commands
	// }

	// commands?.create ({
	// 	name: 'price',
	// 	description: 'Shows Price Of Specified Ticker',
	// })
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) {
		return;
	}

	const { commandName, options } = interaction;

	if (commandName === 'price') {
		interaction.reply({
			content: 'deez'
		});
	}
});

client.login(process.env.TOKEN);
