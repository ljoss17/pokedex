import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { createInterface } from 'node:readline';
import { CLICommand, State } from "./state.js";

export function cleanInput(input: string): string[] {
	var word_array = input.split(" ").filter(word => word !== '');
	const result = word_array.map((word) => word.toLowerCase());
	return result;
}

export function startREPL(state: State): void {
	const rl = state.rl;
	const commands = state.commands;

	rl.prompt();
	rl.on("line", async (line) => {
		var words = cleanInput(line);
		if (words === undefined || words.length == 0) {
			rl.prompt();
		} else {
			const user_command = commands[words[0]];
			if (user_command === undefined) {
				console.log("Unknown command");
			} else {
				try {
					await user_command.callback(state, words[1]);
				} catch (error) {
					console.error(error);
				}
			}
		}
		rl.prompt();
	});
}

