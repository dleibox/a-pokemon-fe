import { createSelector, createFeatureSelector } from '@ngrx/store';
import { APokemonState } from '.';
import { selectContextFeature } from './context.selectors';

export const selectPokemonFeature = createFeatureSelector<APokemonState>('pokemon');

export const selectPokemonsLoaded = createSelector(selectPokemonFeature, (data) => data.loaded);

export const selectPokemons = createSelector(selectContextFeature, selectPokemonFeature, (ctx, state) => {
    console.log(`[ selector ] selectPokemons`);
    const data = state.data.filter((v) => !ctx.search || v.name.toLocaleLowerCase().includes(ctx.search.toLocaleLowerCase()));
    return {
        count: data.length,
        data: data.filter((v, i) => i >= ctx.offset && i < ctx.offset + ctx.pageSize),
    };
});

export const selectPokemonByOffset = createSelector(selectPokemonFeature, (data, offset) => {
    console.log(`[ selector ] selectPokemonByOffset`);
    return data.data[offset];
});
