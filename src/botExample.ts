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
const bot = TelegramBotInstance.getInstance(token);

const state: BotState = {
	isReplyKeyboardOpen: false,
	category: null,
	depth: LevelOfTravers.UNDEFINED,
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

bot.onText(/\/start/, (msg) => {
	const opts: TelegramBot.SendMessageOptions = {
		reply_markup: replyKeyboard.remove(),
	};

	removeAllRows();
	resetState();
	
	bot.sendMessage(msg.from.id, `Welcome ${msg.from.first_name}`, opts);
	
	const commands: {name: string, description: string}[] = qa.faqCategories.categories.map((ctg: Category) => {
		return { 
			name: ctg.name, 
			description: ctg.description
		}
	});

	let str = 'Our bot supports the following categories\n'
	commands.forEach(cmd => str += `\/${cmd.name} - ${cmd.description}\n`)
	
	bot.sendMessage(msg.from.id, str);
});

bot.on('message', async (msg) => {
	console.log(msg);

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
				addNewKeyboardRow('/restart');
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

		if(msg.text === '/restart'){
			bot.sendMessage(msg.chat.id, 'You can restart the bot with clicking \/start');
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
});

bot.on('polling_error', (err) => {
	resetState();
	console.log(err)
});
