import { State } from "./state.js";

export async function commandExplore(state: State, areaName: string) {
	console.log(`Exploring ${areaName}...`);
	const area = await state.pokeapi.fetchLocation(areaName);
	console.log("Found Pokemon:");
	area.pokemon_encounters.forEach((encounter) => {
		console.log(` - ${encounter.pokemon.name}`)
	});
}
