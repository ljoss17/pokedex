import { State } from "./state.js";

export async function commandHelp(state: State) {
	const commands = state.commands;
	console.log("Welcome to the Pokedex!");
	console.log("Usage:");
	console.log("");

	for (const key in commands) {
		console.log(`${commands[key].name}: ${commands[key].description}`);
	}
}
