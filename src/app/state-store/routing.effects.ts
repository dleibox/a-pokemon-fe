import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';

@Injectable()
export class ARoutingEffects {
    constructor(private actions$: Actions, private store: Store<any>) {}

    routing$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(ROUTER_NAVIGATION),
                map((r: RouterNavigationAction) => {
                    console.log('[   TODO   ] path =', r.payload.routerState.url);
                })
            ),
        { dispatch: false }
    );
}
