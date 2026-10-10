import { State } from "./state.js";

export async function commandMap(state: State) {
	const pokeapi = state.pokeapi;
	const maps = await pokeapi.fetchLocations(state.nextLocationsURL);
	state.nextLocationsURL = maps.next;
	state.prevLocationsURL = maps.previous;
	maps.results.forEach((map) => {
		console.log(map.name);
	});
}	
