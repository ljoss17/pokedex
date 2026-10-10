import { Cache } from "./pokecache.js";

export class PokeAPI {
	private static readonly baseURL = "https://pokeapi.co/api/v2";
	#cache = new Cache(10000);

	constructor() {}

	async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
		const url = pageURL ?? "https://pokeapi.co/api/v2/location-area/";
		const cache_entry = this.#cache.get<ShallowLocations>(url);
		if (cache_entry !== undefined) {
			return cache_entry;
		}
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const result = await response.json();
			this.#cache.add<ShallowLocations>(url, result);
			return result;
		} catch (error) {
			throw new Error(`Failed to query endpoint '${url}': '${error}'`);
		}
	}

	async fetchLocation(locationName: string): Promise<Location> {
		const url = PokeAPI.baseURL + "/location-area/" + locationName;
		const cache_entry = this.#cache.get<Location>(url);
		if (cache_entry !== undefined) {
			return cache_entry;
		}
		try	{
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const result = await response.json();
			this.#cache.add<Location>(url, result);
			return result;
		} catch (error) {
			throw new Error(`Failed to query endpoint '${url}': '${error}'`);
		}
	}

	async fetchPokemon(pokemonName: string): Promise<Pokemon> {
		const url = PokeAPI.baseURL + "/pokemon/" + pokemonName;
		const cache_entry = this.#cache.get<Pokemon>(url);
		if (cache_entry !== undefined) {
			return cache_entry;
		}
		try	{
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const result = await response.json();
			this.#cache.add<Pokemon>(url, result);
			return result;
		} catch (error) {
			throw new Error(`Failed to query endpoint '${url}': '${error}'`);
		}
	}
}

export type ShallowLocations = {
	next: string;
	previous: string;
	results: Location[];
};

export type Location = {
	id: number;
	name: string;
	url: string;
	pokemon_encounters: PokemonEncounters[];
};

export type PokemonEncounters = {
	pokemon: Pokemon;
};

export type Pokemon = {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	weight: number;
	stats: Stat[];
	types: Type[];
};

export type Stat = {
	stat: NamedAPIResource;
	base_stat: number;
};

export type Type = {
	type: NamedAPIResource;
};

export type NamedAPIResource = {
	name: string;
	url: string;
};
