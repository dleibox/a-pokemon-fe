import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { setPageIndex, setSearch } from 'src/app/state-store/context.actions';
import { loadAllPokemons } from 'src/app/state-store/pokemon.actions';
import { APokemonState } from 'src/app/state-store/pokemon.reducer';
import { selectContext } from 'src/app/state-store/context.selectors';
import { selectPokemons } from 'src/app/state-store/pokemon.selectors';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class APokemonHomeComponent implements OnInit, OnDestroy {
    pokemons$: Observable<any>;
    pageIndex = 0;
    pageSize = 0;
    searchEnabled = false;
    search: FormControl;
    sub: Subscription = new Subscription();

    constructor(private store: Store<APokemonState>) {}

    ngOnInit(): void {
        this.search = new FormControl();

        this.store.dispatch(loadAllPokemons());
        // this.store.dispatch(loadPokemonPage());

        this.sub.add(
            this.store
                .pipe(
                    select(selectContext),
                    tap((_) => {
                        this.pageSize = _.pageSize;
                        this.pageIndex = _.pageIndex;
                        this.searchEnabled = _.search !== undefined;
                        this.search.setValue(_.search, { emitEvent: false });
                    })
                )
                .subscribe()
        );

        this.pokemons$ = this.store.pipe(
            select(selectPokemons),
            tap((_) => {
                if (this.pageIndex * this.pageSize > _.count) {
                    this.store.dispatch(setPageIndex({ pageIndex: 0 }));
                }
            })
        );

        this.sub.add(
            this.search.valueChanges.pipe(debounceTime(500)).subscribe((search) => {
                this.store.dispatch(setSearch({ search }));
            })
        );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    nextPage(evt) {
        this.store.dispatch(setPageIndex({ pageIndex: evt.pageIndex }));
    }

    clearSearchField() {
        this.search.setValue('');
    }
}
