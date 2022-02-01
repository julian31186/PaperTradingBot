import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES
	]
})

client.on('ready', () => {
	console.log("Bot Ready!");
})

client.on('messageCreate', (message) => {
	if(message.content === '$port'){
		message.reply({
			content: 'Here is your Portfolio!'
		})
	}
})

client.login(process.env.TOKEN)