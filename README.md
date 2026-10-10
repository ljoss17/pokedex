# Pokedex CLI

A command-line Pokédex written in TypeScript. It runs as an interactive REPL, pulls data from the [PokéAPI](https://pokeapi.co/), lets you explore location areas, catch Pokémon and inspect the ones you've caught.

Built as a guided project from the [Boot.dev](https://www.boot.dev) TypeScript track.

## Features

- Interactive REPL with a `Pokedex >` prompt
- Paginated browsing of location areas (forward and back)
- Exploring an area to list the Pokémon found there
- Catching Pokémon, with a catch chance based on their base experience
- Inspecting caught Pokémon (height, weight, stats, types)
- In-memory cache for API responses, with automatic expiry of stale entries

## Requirements

- Node.js (v20 or later recommended)
- npm

## Getting started

```bash
git clone https://github.com/ljoss17/pokedex.git
cd pokedex
npm install
npm run dev
```

## Commands

| Command | Description |
| --- | --- |
| `help` | Show the list of available commands |
| `map` | Display the next 20 location areas |
| `mapb` | Display the previous 20 location areas |
| `explore <area>` | List the Pokémon found in a location area |
| `catch <pokemon>` | Try to catch a Pokémon |
| `inspect <pokemon>` | Show details of a Pokémon you've caught |
| `pokedex` | List all the Pokémon you've caught |
| `exit` | Quit the Pokédex |

### Example session

```text
Pokedex > map
canalave-city-area
eterna-city-area
...
Pokedex > explore pastoria-city-area
Exploring pastoria-city-area...
Found Pokemon:
 - tentacool
 - tentacruel
 ...
Pokedex > catch magikarp
Throwing a Pokeball at magikarp...
magikarp was caught!
Pokedex > inspect magikarp
Name: magikarp
Height: 9
Weight: 100
Stats:
 -hp: 20
 -attack: 10
  ...
Types:
 - water
Pokedex > exit
Closing the Pokedex... Goodbye!
```

## Running tests

```bash
npm test
```

## Project structure

```text
src/
├── main.ts          # Entry point
├── repl.ts          # REPL loop and input parsing
├── state.ts         # Shared state (commands, API client, caught Pokémon)
├── pokeapi.ts       # PokéAPI client
├── pokecache.ts     # Time-based in-memory cache
└── command_*.ts     # One file per REPL command
```

## Acknowledgements

- [PokéAPI](https://pokeapi.co/) for the data
- [Boot.dev](https://www.boot.dev) for the project guide
