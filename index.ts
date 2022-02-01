import DiscordJS, { Intents, MessageEmbed } from 'discord.js'
import dotenv from 'dotenv'
import ticker from './queries/stock_data'

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


//<--------------------------------Command Section-------------------------------------------------->
var symbol:String
client.on('messageCreate', (message) => {
	if(message.content === `$${symbol}`){
		message.reply({
			content: ticker(symbol)
		})
	}
})


client.on('messageCreate', (message) => {
	if(message.content === '$port'){
		message.reply({
			content: 'Here is your Portfolio!'
		})
	}
})


//<--------------------------------End of Command Section-------------------------------------------------->





client.login(process.env.TOKEN)