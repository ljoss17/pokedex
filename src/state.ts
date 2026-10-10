import { createInterface, type Interface } from "readline";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapB } from "./command_mapb.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";

export type State = {
	commands: Record<string, CLICommand>;	
	rl: Interface;
	pokeapi: PokeAPI;
	pokedex: Record<string, Pokemon>;
	nextLocationsURL?: string;
	prevLocationsURL?: string;
};

export type CLICommand = {
	name: string;
	description: string;
	callback: (state: State, ...args: string[]) => Promise<void>;
};

export function initState(): State {
	const rl = createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: 'Pokedex > ',
	});
	const commands = {exit: {
			name: "exit",
			description: "Exit the Pokedex",
			callback: commandExit,
		},
		help: {
			name: "help",
			description: "Displays a help message",
			callback: commandHelp,
		},
		map: {
			name: "map",
			description: "Display the name of the next 20 location areas",
			callback: commandMap,
		},
		mapb: {
			name: "mapb",
			description: "Display the name of the previous 20 location areas",
			callback: commandMapB,
		},
		explore: {
			name: "explore",
			description: "Explore the specified area",
			callback: commandExplore,
		},
		catch: {
			name: "catch",
			description: "Catch the specified pokemon",
			callback: commandCatch,
		},
		inspect: {
			name: "inspect",
			description: "Inspect the specified pokemon if it was previously caught",
			callback: commandInspect,
		},
		pokedex: {
			name: "pokedex",
			description: "Display all the pokemons you caught",
			callback: commandPokedex,
		},
	};
	return {
		commands: commands,
		rl: rl,
		pokeapi: new PokeAPI(),
		pokedex: {},
	};
}
