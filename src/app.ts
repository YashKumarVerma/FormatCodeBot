import dotenv from "dotenv";
import beautify from "js-beautify";
import TelegramBot from "node-telegram-bot-api";

/** load configs */
dotenv.config();
const token: string = process.env.TOKEN || "";

/** start instance of telegram bot */
const bot = new TelegramBot(token, {
  polling: true,
});

/** listen for events from bot */
bot.onText(/ /i, (message: any, match: any) => {
  const chatId = message.chat.id;
  console.log(`> ${message.from.first_name} just used`);
  bot.sendMessage(chatId, `yeah, ${message.from.first_name}.`);
  bot.sendMessage(chatId, beautify(message.text));
});
