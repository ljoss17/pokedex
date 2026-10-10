import { State } from "./state.js";
import { Pokemon } from "./pokeapi.js";

export async function commandCatch(state: State, pokemonName: string) {
	const pokemon = await state.pokeapi.fetchPokemon(pokemonName);
	console.log(`Throwing a Pokeball at ${pokemon.name}...`);
	const catchThreshold = 50;
	const rng = Math.floor(Math.random() * pokemon.base_experience * 10);
	if (rng < catchThreshold) {
		console.log(`${pokemon.name} was caught!`);
		state.pokedex[pokemon.name] = pokemon;
	} else {
		console.log(`${pokemon.name} escaped!`);
	}
}
