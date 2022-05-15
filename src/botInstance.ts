import TelegramBot = require("node-telegram-bot-api");

/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
 export class TelegramBotInstance {
    private static instance: TelegramBot;

    private constructor() { }

    public static getInstance(token?: string): TelegramBot {
        if (!TelegramBotInstance.instance && token) {
            TelegramBotInstance.instance = new TelegramBot(token, { polling: true });
        } else if (!TelegramBotInstance.instance && !token) {
            throw new Error('No token provided');
        }

        return TelegramBotInstance.instance;
    }
}