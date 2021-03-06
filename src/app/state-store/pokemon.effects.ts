import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, catchError, map, filter } from 'rxjs/operators';
import { DataService } from '../modules/core/service/data.service';
import { AContextState, APokemonState } from '.';
import { PokemonResponse } from '../models/pokemon.model';
import { showErrorAction } from './error.actions';
import { loadPokemonPage, loadPokemonPageDone, loadAllPokemons } from './pokemon.actions';
import { selectContext } from './context.selectors';
import { selectPokemonByOffset } from './pokemon.selectors';
import { Log } from '../modules/core/decorators/app-decorators';

@Injectable()
@Log()
export class APokemonEffects {
    constructor(private actions$: Actions, private svc: DataService, private store: Store<AContextState | APokemonState>) {}

    loadAllPokemons$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadAllPokemons.type),
            switchMap(() => {
                console.log(`[   effect ] loadAllPokemons`);
                return this.svc.getPokemons(0, 1000).pipe(
                    map((resp: PokemonResponse) => {
                        return loadPokemonPageDone({ offset: 0, data: resp });
                    }),
                    catchError((err) => {
                        console.log(`[   effect ][ error ] loadAllPokemons`, err);
                        return of(showErrorAction({ message: err.error.message }));
                    })
                );
            })
        )
    );

    loadPokemonPage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadPokemonPage.type),
            switchMap(() => this.store.select(selectContext)),
            switchMap((ctx) => {
                console.log(`[   effect ] loadPokemonPage`);
                return this.store.pipe(
                    select(selectPokemonByOffset, ctx.offset),
                    filter((_) => !_),
                    switchMap((_) => {
                        return this.svc.getPokemons(ctx.offset, ctx.pageSize).pipe(
                            map((resp: PokemonResponse) => {
                                return loadPokemonPageDone({ offset: ctx.offset, data: resp });
                            }),
                            catchError((err) => of(err))
                        );
                    })
                );
            })
        )
    );
}
