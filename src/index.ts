import './lib/setup';
import { LogLevel, SapphireClient } from '@sapphire/framework';

const client = new SapphireClient({
	defaultPrefix: 'vb!',
	caseInsensitiveCommands: true,
	logger: {
		level: LogLevel.Debug
	},
	intents: [
		'GUILDS',
		'GUILD_MEMBERS',
		'GUILD_BANS',
		'GUILD_EMOJIS_AND_STICKERS',
		'GUILD_VOICE_STATES',
		'GUILD_MESSAGES',
		'GUILD_MESSAGE_REACTIONS',
		'DIRECT_MESSAGES',
		'DIRECT_MESSAGE_REACTIONS'
	]
});

const main = async () => {
	try {
		client.logger.info('Client is logging in...');
		await client.login(process.env.TOKEN);
		client.logger.info('Client has successfully logged in!');
	} catch(error) {
		client.logger.fatal(error);
		client.destroy();
		process.exit(1);
	}
};

main();
