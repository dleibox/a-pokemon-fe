import { NgModule, ModuleWithProviders } from '@angular/core';
import { ASharedModule } from '../shared/shared.module';
import { AppErrorService } from './app-error.service';
import { AppErrorDialogComponent } from './app-error-dialog.component';
import { Log } from '../core/decorators/app-decorators';

@NgModule({
    imports: [ASharedModule],
    declarations: [AppErrorDialogComponent],
})
@Log()
export class AppErrorModule {
    static forRoot(): ModuleWithProviders<AppErrorModule> {
        return {
            ngModule: AppErrorModule,
            providers: [AppErrorService],
        };
    }
}
