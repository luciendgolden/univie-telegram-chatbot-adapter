import TelegramBot = require("node-telegram-bot-api");
import { Category, FaqCategories, Question, SubCategory } from "../interfaces";

export function hasBotCommands(entities: TelegramBot.MessageEntity[]) {
	if (!entities || !(entities instanceof Array)) {
		return false;
	}

	return entities.some((e) => e.type === "bot_command");
}

export function mapFromFaqCategoryToCategory(obj: FaqCategories, search: string): Category {
	return obj.categories.find((e: Category) => e.name.trim().toLowerCase() === search.trim().toLowerCase())
}

export function mapFromCategoryToSubCategory(obj: Category, search: string): SubCategory{
	return obj.subCategory.find((e: SubCategory) => e.name.trim().toLowerCase() === search.trim().toLowerCase())
}

export function mapFromSubCategoryToQuestion(obj: SubCategory, search: string): Question{
	return obj.questions.find((e: Question) => e.question.trim().toLowerCase() === search.trim().toLowerCase())
}