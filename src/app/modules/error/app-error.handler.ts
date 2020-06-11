import { Injectable, ErrorHandler } from '@angular/core';
import { AppErrorService } from './app-error.service';
import { Log } from '../core/decorators/app-decorators';

@Injectable({
    providedIn: 'root',
})
@Log()
export class AppErrorHandler implements ErrorHandler {
    constructor(private errService: AppErrorService) {}

    handleError(error: Error | any): void {
        console.log(`%c[    error ][ handler ] ${error.stack}`, 'color: orangered');
        this.errService.showError(error.stack);
    }
}
