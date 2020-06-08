import { createAction, props } from '@ngrx/store';
import { PokemonResponse } from '../models/pokemon.model';

export const loadAllPokemons = createAction('[Load Pokemons] Load All Pokemons');
export const loadPokemonPage = createAction('[Load Pokemons] Load Pokemons');
export const loadPokemonPageDone = createAction('[Load Pokemons] Load Pokemons Done', props<{ offset: number; data: PokemonResponse }>());
export const loadPokemonPageError = createAction('[Load Pokemons] Load Pokemons Error');
