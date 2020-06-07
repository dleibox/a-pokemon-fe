import { createAction, props } from '@ngrx/store';

export const loadPokemons = createAction('[Load Pokemons] Load Pokemons', props<{ offset: number }>());
export const loadPokemonsDone = createAction('[Load Pokemons] Load Pokemons Done', props<{ data: any }>());
export const loadPokemonsError = createAction('[Load Pokemons] Load Pokemons Error');
