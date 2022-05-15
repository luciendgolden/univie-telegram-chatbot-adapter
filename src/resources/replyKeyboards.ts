import {
	ReplyKeyboard,
    Row,
	KeyboardButton,
} from "node-telegram-keyboard-wrapper";

/**
 * Category - Help
 */

export const replyKeyboardInstance: ReplyKeyboard = new ReplyKeyboard();

export const addNewKeyboardRows = (args: string[]): number => {
	let addedRows: number = 0;

	for(const arg of args) {
		const keyboardRow = new Row<KeyboardButton>(new KeyboardButton(arg));
		replyKeyboardInstance.push(keyboardRow);
		addedRows+=1;
	}

	return addedRows;
}

export const addNewKeyboardRow = (arg: string): void => {
	const keyboardRow = new Row<KeyboardButton>(new KeyboardButton(arg));
	replyKeyboardInstance.push(keyboardRow);
}

export const removeAllRows = (): void => {
	while (replyKeyboardInstance.length) {
		replyKeyboardInstance.pop();
	}
}



