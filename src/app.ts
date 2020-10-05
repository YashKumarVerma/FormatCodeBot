import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

/** load configs */
dotenv.config();
const token: string = process.env.TOKEN || "";

/** start instance of telegram bot */
const bot = new TelegramBot(token, {
  polling: true,
});

/** listen for events from bot */
bot.onText(/\/format/, (message: any, match: any) => {
  /**
   * message : contains the actual body of the message
   * match : result of executing regex on the above text content
   */
  const chatId = message.chat.id;
  const url = match.input.split(" ")[1];

  console.log(`> Received message : ${url}`);
  bot.sendMessage(chatId, "yeah, on it.");
});
