import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, catchError, map, take } from 'rxjs/operators';
import { loadPokemons, loadPokemonsDone } from './pokemon.actions';
import { DataService } from '../modules/core/service/data.service';
import { selectPokemonByOffset } from './pokemon.selectors';

@Injectable()
export class APokemonEffects {
    constructor(private actions$: Actions, private svc: DataService, private store: Store<any>) {}

    loadPokemons$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadPokemons.type),
            switchMap(({ offset }) => {
                return this.store.pipe(
                    select(selectPokemonByOffset),
                    take(1),
                    switchMap((_) => {
                        if (!!_.data) {
                            return of(loadPokemonsDone({ data: { count: _.count, results: [] } }));
                        }
                        return this.svc.getPokemons(offset).pipe(
                            map((resp) => {
                                return loadPokemonsDone({ data: resp });
                            }),
                            catchError((err) => of(err))
                        );
                    })
                );
            })
        )
    );
}
