import { createReducer, on } from '@ngrx/store';
import { setPageSize, setPageIndex, toggleSearch, setSearch } from './context.actions';

export interface AContextState {
    pageSize: number;
    pageIndex: number;
    offset: number;
    search: string;
    searchEnabled: boolean;
    currentPokemonId?: number;
    currentPokemonName?: string;
}

export const initialContextState: AContextState = {
    pageIndex: 0,
    pageSize: 0,
    offset: 0,
    search: undefined,
    searchEnabled: false,
};

export function contextReducer(stateData, action) {
    return createReducer(
        initialContextState,
        on(setPageSize, (state) => {
            console.log(`[ reducer ] ${action.type}`);
            return { ...state, pageSize: action.pageSize, offset: action.pageSize * state.pageIndex };
        }),
        on(setPageIndex, (state) => {
            console.log(`[ reducer ] ${action.type}`);
            return { ...state, pageIndex: action.pageIndex, offset: action.pageIndex * state.pageSize };
        }),
        on(toggleSearch, (state) => {
            console.log(`[ reducer ] ${action.type}`);
            return { ...state, search: state.search === undefined ? '' : undefined };
        }),
        on(setSearch, (state) => {
            console.log(`[ reducer ] ${action.type}`);
            return { ...state, search: action.search };
        })
    )(stateData, action);
}
