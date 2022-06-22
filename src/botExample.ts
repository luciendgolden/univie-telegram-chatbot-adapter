import * as TelegramBot from 'node-telegram-bot-api';
import { ReplyKeyboard } from 'node-telegram-keyboard-wrapper';
import * as dotenv from 'dotenv';

import * as qa from './resources/faqCategories';
import { BotState, Category, Question, SubCategory } from './interfaces';
import { hasBotCommands, mapFromCategoryToSubCategory, mapFromFaqCategoryToCategory, mapFromSubCategoryToQuestion } from './helpers/helpers';
import { replyKeyboardInstance as replyKeyboard, addNewKeyboardRows, removeAllRows, addNewKeyboardRow } from './resources/replyKeyboards';
import { TelegramBotInstance } from './botInstance';
import { LevelOfTravers } from './interfaces/enums';

dotenv.config({ path: __dirname+'/../.env' });

const token = process.env.TELEGRAM_ACCESS_TOKEN;
//const bot = TelegramBotInstance.getInstance(token);
const bot = new TelegramBot(token, { polling: true })

const state: BotState = {
	isReplyKeyboardOpen: false,
	category: null,
	depth: LevelOfTravers.UNDEFINED,
	prevMsg: null,
};

function resetState(): void{
	state.isReplyKeyboardOpen = false;
	state.category = null;
	state.depth = LevelOfTravers.UNDEFINED;
}

async function openReplyWithKeyboardOptions(msg: TelegramBot.Message, keyboard: ReplyKeyboard){
	const messageOptions: TelegramBot.SendMessageOptions = {
		reply_markup: keyboard.getMarkup(),
	};

	await bot.sendMessage(
		msg.from.id,
		'This is a message with a reply keyboard. Click on one of the buttons to close it.',
		messageOptions,
	);
	state.isReplyKeyboardOpen = true;
}

async function closeReplyWithKeyboardOptions(msg: TelegramBot.Message, keyboard: ReplyKeyboard){
	if (state.isReplyKeyboardOpen) {
		const options: TelegramBot.SendMessageOptions = {
			reply_markup: keyboard.remove(),
		};

		await bot.sendMessage(
			msg.from.id,
			'Message Received. Im closing the replyKeyboard.',
			options,
		);
		state.isReplyKeyboardOpen = false;
	}
}

bot.onText(/\/start/, async (msg) => {
	try{
		const opts: TelegramBot.SendMessageOptions = {
			reply_markup: replyKeyboard.remove(),
		};
		
		resetState();
		removeAllRows();
		state.prevMsg = Object.assign(msg);
		
		bot.sendMessage(msg.from.id, `Welcome ${msg.from.first_name}`, opts);
		
		const commands: TelegramBot.BotCommand[] = qa.faqCategories.categories.map((ctg: Category) => {
			return { 
				command: ctg.name.toLowerCase(), 
				description: ctg.description
			}
		});

		bot.setMyCommands(commands);
		bot.setChatMenuButton;
		
		let str = 'Our bot supports the following categories\n'
		commands.forEach(cmd => str += `\/${cmd.command} - ${cmd.description}\n`)
		
		bot.sendMessage(msg.from.id, str);
	}catch(e){
		bot.sendMessage(state.prevMsg.chat.id, `An error occured ${e.message}`);
		console.log(e);
	}
});

bot.on('message', async (msg) => {
	console.log(msg);

	try{
		// Subcategories - ReplyKeyboardMarkup
		if (!hasBotCommands(msg.entities)) {
			// distinguish state of either subcategory or question replyKeyboard
			switch(+state.depth){
				case LevelOfTravers.SUBCATEGORY:
					const currentCategory: Category = Object.assign(state.category);

					state.category = mapFromCategoryToSubCategory(currentCategory, msg.text);
					bot.sendMessage(msg.chat.id, `You clicked the subcategory ${msg.text}`);

					// create respective subcategory questions[] -> add all questions to replyKeyboard -> openReplyWithKeyboardOptions
					const questionNames: string[] = state.category.questions.map((e: Question) => e.question);

					removeAllRows();
					console.log(replyKeyboard);

					addNewKeyboardRows(questionNames);
					addNewKeyboardRow('/start');
					openReplyWithKeyboardOptions(msg, replyKeyboard);

					state.depth = LevelOfTravers.QUESTION;
					break;
				case LevelOfTravers.QUESTION:
					const currentQuestions: SubCategory = Object.assign(state.category);
					const question: Question = mapFromSubCategoryToQuestion(currentQuestions, msg.text);
					bot.sendMessage(msg.chat.id, question.answer);
					break;
			}

		} else if(hasBotCommands(msg.entities)){
			if (state.isReplyKeyboardOpen) {
				closeReplyWithKeyboardOptions(msg, replyKeyboard);
			}

			/**
			 * Categories handler from JSON
			 */
			const faqCategories: string[] = qa.faqCategories.categories.map((ctg: Category) => ctg.name.toLowerCase());

			for(const ctg of faqCategories) {
				if(msg.text.substring(1).trim() === ctg) {
					removeAllRows();
					bot.sendMessage(msg.chat.id, `You clicked the category ${ctg}`);

					state.category = mapFromFaqCategoryToCategory(qa.faqCategories, ctg);

					if(state.category.subCategory.length <= 0) {
						bot.sendMessage(msg.chat.id, `Seems like this category „${ctg}“ does not have any subcategories`);
						return;
					}

					// Add subcategories to replyKeyboard
					const subCategoryNames: string[] = state.category.subCategory.map((subCtg: SubCategory) => subCtg.name);
					addNewKeyboardRows(subCategoryNames);
					openReplyWithKeyboardOptions(msg, replyKeyboard);

					state.depth = LevelOfTravers.SUBCATEGORY;
				}
			}
		}
	}catch(e){
		bot.sendMessage(state.prevMsg.chat.id, `An error occured ${e.message}`);
		console.log(e);
	}
});

bot.on('polling_error', (err) => {
	console.log(err);
	bot.sendMessage(state.prevMsg.from.id, `An error occured ${err.message}`);
});
