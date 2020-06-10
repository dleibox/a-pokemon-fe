import { createReducer, on } from '@ngrx/store';
import { NameUrl } from '../models/pokemon.model';
import { loadAllPokemons, loadPokemonPage, loadPokemonPageDone, loadPokemonPageError } from './pokemon.actions';

export interface APokemonState {
    count: number;
    offset: number;
    pageSize: number;
    data: NameUrl[];
    error: any;
    loaded: boolean;
}

export const initialState: APokemonState = {
    count: 0,
    offset: 0,
    pageSize: 0,
    data: [],
    error: null,
    loaded: false,
};

export function pokemonReducer(stateData, action) {
    return createReducer(
        initialState,
        on(loadAllPokemons, (state) => {
            console.log(`[  reducer ] ${action.type}`);
            return { ...state, loaded: false };
        }),
        on(loadPokemonPage, (state) => {
            console.log(`[  reducer ] ${action.type}`);
            return { ...state, loaded: false };
        }),
        on(loadPokemonPageDone, (state) => {
            console.log(`[  reducer ] ${action.type}`);
            const offset = action.offset;
            const data = !state.data ? [] : [...state.data];
            if (data.length <= offset) {
                action.data.results.forEach((v, i) => {
                    data[offset + i] = v;
                });
            }
            return { ...state, loaded: true, error: null, count: action.data.count, offset, data };
        }),
        on(loadPokemonPageError, (state) => {
            console.log(`[  reducer ] ${action.type}`);
            return { ...state, loaded: true, count: 0, data: null, error: 'Error' };
        })
    )(stateData, action);
}
