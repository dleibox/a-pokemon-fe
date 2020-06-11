import { createReducer, on } from '@ngrx/store';
import { showErrorAction, hideErrorAction } from './error.actions';

export interface AErrorState {
    message: string;
    display: boolean;
}

export const initialErrorState: AErrorState = {
    message: '',
    display: false,
};

export function errorReducer(stateData, action) {
    return createReducer(
        initialErrorState,
        on(showErrorAction, (state) => {
            console.log(`[  reducer ] ${action.type}`);
            return { ...state, message: action.message, display: true };
        }),
        on(hideErrorAction, (state) => {
            console.log(`[  reducer ] ${action.type}`);
            return { ...state, message: '', display: false };
        })
    )(stateData, action);
}
