import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AContextState } from '.';

export const selectContextFeature = createFeatureSelector<AContextState>('context');

export const selectContext = createSelector(selectContextFeature, (state) => state);
