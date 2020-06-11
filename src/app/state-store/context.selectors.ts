import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AContextState } from '.';

export const selectContextFeature = createFeatureSelector<AContextState>('context');

export const selectContext = createSelector(selectContextFeature, (state) => {
    console.log(`[ selector ] selectContext`);
    return state;
});
