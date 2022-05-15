import { CategoryName, LevelOfTravers } from "./enums";

/**
 * FAQ-JSON
 */

export interface FaqCategories {
    categories: Category[];
}

export interface Category {
    name: CategoryName;
    description: string;
    subCategory: SubCategory[];
}

export interface SubCategory {
    name: string;
    questions: Question[];
}

export interface Question {
    question: string;
    answer: string;
}

/**
 * BotState
 */

export interface BotState {
    isReplyKeyboardOpen: boolean;
	category: Category | SubCategory | Question;
    depth: LevelOfTravers;
}