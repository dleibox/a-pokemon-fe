import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AppBottomsheetComponent } from './modules/shared/components/app-bottomsheet.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Pokémon';

    mobileQuery: MediaQueryList;

    constructor(media: MediaMatcher, private bottomSheet: MatBottomSheet) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
    }

    toggleSearch() {
        console.log('toggle search');
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
