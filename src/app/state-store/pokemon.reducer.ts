import { createReducer, on, Action } from '@ngrx/store';
import { loadPokemons, loadPokemonsDone, loadPokemonsError } from './pokemon.actions';

export const featureKey = 'pokemon';

export interface APokemonState {
    count: number;
    offset: number;
    pageSize: number;
    data: any[];
    error: any;
    loaded: boolean;
}

export const initialState: APokemonState = {
    count: 0,
    offset: 0,
    pageSize: 12,
    data: [],
    error: null,
    loaded: false,
};

export function pokemonReducer(stateData, action) {
    return createReducer(
        initialState,
        on(loadPokemons, (state) => {
            return { ...state, offset: action.offset };
        }),
        on(loadPokemonsDone, (state) => {
            const offset = state.offset;
            const data = [...state.data];
            if (data.length <= offset) {
                action.data.results.forEach((v, i) => {
                    data[offset + i] = v;
                });
            }
            return { ...state, loaded: true, error: null, count: action.data.count, data };
        }),
        on(loadPokemonsError, (state) => {
            return { ...state, loaded: true, count: 0, data: null, error: 'Error' };
        })
    )(stateData, action);
}
