import { createSelector, createFeatureSelector } from '@ngrx/store';
import { APokemonState, featureKey } from './pokemon.reducer';

export const selectFeature = createFeatureSelector<APokemonState>(featureKey);

export const selectPokemonsLoaded = createSelector(selectFeature, (data) => data.loaded);

export const selectAllPokemons = createSelector(selectFeature, (data) => {
    return { count: data.count, data: data.data.filter((v, i) => i >= data.offset && i < data.offset + data.pageSize) };
});

export const selectPokemonByOffset = createSelector(selectFeature, (data) => {
    return { count: data.count, data: data.data[data.offset] };
});
