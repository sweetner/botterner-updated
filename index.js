const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: 's!',
    unknownCommandResponse: false,
    owner: ['109378124898136064','290154978742632449'],
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['random', 'Random'],
        ['chat', 'Chat'],
        ['user', 'User'],
        ['admin', 'Admin']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
    client.user.setGame('s!help for help!');
});

client.login(process.env.BOT_TOKEN);