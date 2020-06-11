import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AErrorState } from './';

export const selectErrorFeature = createFeatureSelector<AErrorState>('error');

export const selectError = createSelector(selectErrorFeature, (state) => {
    console.log(`[ selector ] selectError`);
    return state;
});
