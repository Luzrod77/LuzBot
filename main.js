const { Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NjEwMTg2OTA5ODk3MDY0NTEx.XVGymA.iT5bkgzLWJwRL5ucmVAIxCCOve4');