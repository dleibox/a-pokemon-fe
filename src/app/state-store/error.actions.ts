import { createAction, props } from '@ngrx/store';

export const showErrorAction = createAction('[Error] Show Error Message', props<{ message: string }>());
export const hideErrorAction = createAction('[Error] Hide Error Message');
