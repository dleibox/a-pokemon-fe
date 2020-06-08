import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Store } from '@ngrx/store';
import { AppBottomsheetComponent } from './modules/shared/components/app-bottomsheet.component';
import { setPageSize, setPageIndex, toggleSearch } from './state-store/context.actions';
import { AContextState } from './state-store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Pokémon';

    mobileQuery: MediaQueryList;

    constructor(media: MediaMatcher, private bottomSheet: MatBottomSheet, private store: Store<AContextState>) {
        console.log('[ AppComponent ] constructor');

        this.mobileQuery = media.matchMedia('(max-width: 600px)');

        this.store.dispatch(setPageSize({ pageSize: 12 }));
        this.store.dispatch(setPageIndex({ pageIndex: 0 }));
    }

    toggleSearch() {
        this.store.dispatch(toggleSearch());
    }

    openSheet() {
        this.bottomSheet.open(AppBottomsheetComponent, {
            data: {
                items: [
                    {
                        url: '',
                        title: 'Created by Daniel 2020',
                        content: '',
                    },
                ],
            },
        });
    }
}
