import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AppErrorService } from './modules/error/app-error.service';
import { AContextState } from './state-store';
import { setPageSize, setPageIndex, toggleSearch } from './state-store/context.actions';
import { selectError } from './state-store/error.selectors';
import { AppErrorDialogComponent } from './modules/error/app-error-dialog.component';
import { AppBottomsheetComponent } from './modules/shared/components/app-bottomsheet.component';
import { Log } from './modules/core/decorators/app-decorators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
@Log()
export class AppComponent implements OnInit, OnDestroy {
    title = 'Pokémon';

    mobileQuery: MediaQueryList;

    sub: Subscription = new Subscription();

    constructor(
        media: MediaMatcher,
        private bottomSheet: MatBottomSheet,
        private store: Store<AContextState>,
        private router: Router,
        public dialog: MatDialog,
        private errService: AppErrorService
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');

        this.store.dispatch(setPageSize({ pageSize: 12 }));
        this.store.dispatch(setPageIndex({ pageIndex: 0 }));
    }

    ngOnInit(): void {
        this.sub.add(
            this.store.pipe(select(selectError)).subscribe((_) => {
                if (_.display) {
                    console.log('[   errDlg ] [ opening ]');
                    const dlgRef = this.dialog.open(AppErrorDialogComponent, { position: { top: '6rem' }, data: { message: _.message } });
                    dlgRef.afterClosed().subscribe(() => {
                        this.errService.hideError();
                    });
                }
            })
        );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    toggleSearch() {
        this.router.navigate(['/pokemon']).then((_) => {
            this.store.dispatch(toggleSearch({ show: _ === true ? true : undefined }));
        });
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

    raiseError() {
        throw new Error('A Test Error Message');
    }
}
