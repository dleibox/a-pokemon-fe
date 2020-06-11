import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { showErrorAction, hideErrorAction } from 'src/app/state-store/error.actions';
import { Log } from '../core/decorators/app-decorators';

@Injectable({
    providedIn: 'root',
})
@Log()
export class AppErrorService {
    constructor(private store: Store<any>) {}

    showError(message: string) {
        this.store.dispatch(showErrorAction({ message }));
    }

    hideError() {
        this.store.dispatch(hideErrorAction());
    }
}
