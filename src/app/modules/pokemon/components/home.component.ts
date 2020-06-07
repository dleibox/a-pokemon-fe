import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { selectAllPokemons } from 'src/app/state-store/pokemon.selectors';
import { loadPokemons } from 'src/app/state-store/pokemon.actions';
import { APokemonState } from 'src/app/state-store/pokemon.reducer';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class APokemonHomeComponent implements OnInit, OnDestroy {
    pokemons$: Observable<any>;
    pageIndex = 0;
    pageSize = 12;
    searchEnabled = false;
    search: FormControl;
    sub: Subscription;

    constructor(private store: Store<APokemonState>) {}

    ngOnInit(): void {
        this.store.dispatch(loadPokemons({ offset: 0 }));
        this.pokemons$ = this.store.pipe(select(selectAllPokemons));

        this.search = new FormControl();
        // this.sub = this.search.valueChanges.pipe(debounceTime(500)).subscribe((v) => {
        //     this.store.dispatch(...);
        // });
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    nextPage(evt) {
        this.pageIndex = evt.pageIndex;
        this.pageSize = evt.pageSize;

        this.store.dispatch(loadPokemons({ offset: evt.pageIndex * evt.pageSize }));
    }
}
