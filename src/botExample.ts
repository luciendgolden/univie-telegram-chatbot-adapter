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

const faqCmds: {command: string; description: string;}[] = qa.faqCategories.categories.map((ctg: Category) => {
	return { 
		command: ctg.name.toLowerCase().replace(/\s/g, ""), 
		description: ctg.description
	}
});

const commands: TelegramBot.BotCommand[] = [{
	command: 'start',
	description: 'Почніть знову і покажіть мені, що ви можете відповісти',
}, ...faqCmds]

function resetState(): void{
	state.isReplyKeyboardOpen = false;
	state.category = null;
	state.depth = LevelOfTravers.UNDEFINED;
}

bot.onText(/\/start/, async (msg) => {
	try{
		const opts: TelegramBot.SendMessageOptions = {
			reply_markup: replyKeyboard.remove(),
		};
		
		// reset state, remove all replykeyboard rows and save message item as state
		resetState();
		removeAllRows();
		state.prevMsg = Object.assign(msg);
		
		// send welcome message and remove open keyboard
		await bot.sendMessage(msg.from.id, `Ласкаво просимо ${msg.from.first_name}`, opts);

		// set persistent menue
		bot.setMyCommands(commands);
		bot.setChatMenuButton;

		let str = 'Наш бот підтримує наступні категорії\n'
		commands.forEach(cmd => str += `\/${cmd.command} - ${cmd.description}\n`)
		
		bot.sendMessage(msg.from.id, str);
	}catch(e){
		console.log(e);
		bot.sendMessage(state.prevMsg.from.id, `Start command error occured ${e.message}`);
	}
});

bot.on('message', async (msg) => {
	try{
		// Subcategories - ReplyKeyboardMarkup
		if (!hasBotCommands(msg.entities)) {
			// distinguish state of either subcategory or question replyKeyboard
			switch(+state.depth){
				case LevelOfTravers.SUBCATEGORY:
					const currentCategory: Category = Object.assign(state.category);

					state.category = mapFromCategoryToSubCategory(currentCategory, msg.text);
					

					// create respective subcategory questions[] -> add all questions to replyKeyboard -> openReplyWithKeyboardOptions
					const questionNames: string[] = state.category.questions.map((e: Question) => e.question);

					removeAllRows();
					addNewKeyboardRows(questionNames);

					bot.sendMessage(msg.chat.id, `Виберіть тему з ${msg.text}, про яку б хотіли дізнатися більше!`, {
						reply_markup: replyKeyboard.getMarkup(),
					});

					state.isReplyKeyboardOpen = true;
					state.depth = LevelOfTravers.QUESTION;
					break;
				case LevelOfTravers.QUESTION:
					const currentQuestions: SubCategory = Object.assign(state.category);
					const question: Question = mapFromSubCategoryToQuestion(currentQuestions, msg.text);
					bot.sendMessage(msg.chat.id, question.answer);
					break;
			}

		} else if(hasBotCommands(msg.entities)){
			/**
			 * Categories handler from static FAQ JSON file
			 */
			const faqCategories: string[] = qa.faqCategories.categories.map((ctg: Category) => ctg.name.toLowerCase().replace(/\s/g, ""));

			for(const ctg of faqCategories) {
				if(msg.text.substring(1).trim() === ctg) {
					removeAllRows();

					const cmd: TelegramBot.BotCommand = commands.find(cmd => cmd.command === ctg);
					state.category = mapFromFaqCategoryToCategory(qa.faqCategories, ctg);

					if(state.category.subCategory.length <= 0) {
						let opts: TelegramBot.SendMessageOptions = {};

						if(state.isReplyKeyboardOpen){
							opts = {
								reply_markup: replyKeyboard.remove(),
							};
						}

						bot.sendMessage(msg.chat.id, `Вибачте, але наразі ми не можемо надати вам конкретну інформацію для категорії „${ctg}“`, opts);
						state.isReplyKeyboardOpen = false;

						return;
					}

					// Add subcategories to replyKeyboard
					const subCategoryNames: string[] = state.category.subCategory.map((subCtg: SubCategory) => subCtg.name);
					addNewKeyboardRows(subCategoryNames);

					bot.sendMessage(msg.chat.id, `Категорія ${ctg} підтримує вас із такими темами - ${cmd.description}`, {
						reply_markup: replyKeyboard.getMarkup(),
					});

					state.isReplyKeyboardOpen = true;
					state.depth = LevelOfTravers.SUBCATEGORY;
				}
			}
		}
	}catch(e){
		console.log(state.prevMsg);
		console.log(e);

		bot.sendMessage(state.prevMsg.chat.id, `Message error occured ${e.message}`);
	}
});

bot.on('polling_error', (err) => {
	console.log(state.prevMsg);
	console.log(err);

	bot.sendMessage(state.prevMsg.chat.id, `Polling error occured ${err.message}`);
});
