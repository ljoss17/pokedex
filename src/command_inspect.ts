import { State } from "./state.js";
import { Stat, Type } from "./pokeapi.js";

export async function commandInspect(state: State, pokemonName: string) {
	const pokemon = state.pokedex[pokemonName];
	if (pokemon === undefined) {
		console.log("you have not caught that pokemon");
		return;
	}
	console.log(`Name: ${pokemon.name}`);
	console.log(`Height: ${pokemon.height}`);
	console.log(`Weight: ${pokemon.weight}`);
	console.log("Stats:");
	pokemon.stats.forEach((stat: Stat) => {
		console.log(` -${stat.stat.name}: ${stat.base_stat}`)
	});
	console.log("Types:");
	pokemon.types.forEach((type: Type) => {
		console.log(` - ${type.type.name}`)
	});
}
