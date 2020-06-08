import { createAction, props } from '@ngrx/store';

export const setPageSize = createAction('[App] Set Page Size', props<{ pageSize: number }>());
export const setPageIndex = createAction('[App] Set Page Index', props<{ pageIndex: number }>());
export const toggleSearch = createAction('[Search] Toggle Search');
export const setSearch = createAction('[Search] Search Pokemon', props<{ search: string }>());
