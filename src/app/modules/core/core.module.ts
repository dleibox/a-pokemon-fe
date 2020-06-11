import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data.service';
import { Log } from './decorators/app-decorators';

@NgModule({
    imports: [HttpClientModule],
})
@Log()
export class ACoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ACoreModule,
            providers: [DataService],
        };
    }
}
