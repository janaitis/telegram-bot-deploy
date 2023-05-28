const TelegramApi = require('node-telegram-bot-api');

const token = '6078160256:AAG4iR_hYQwT-zBw3XdtrSHjpXa2JPrTNa8';


const bot = new TelegramApi(token, {polling: true});

bot.setMyCommands([
    {command: '/start', description: 'start greating'},
    {command: '/info', description: 'get info'},
]);

bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    
    

    if (text === '/start') {
        return bot.sendMessage(chatId, 'Good morning Vietnam!!!')
    }

    if (text === '/info') {
        return bot.sendMessage(chatId, `Your name: ${msg.from.first_name}  ${msg.from.last_name}`);
    }

    
    return bot.sendMessage(chatId, `You wrote me: ${text}`);
    

});


