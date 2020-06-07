import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data.service';

@NgModule({
    imports: [HttpClientModule],
})
export class ACoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ACoreModule,
            providers: [DataService],
        };
    }
}
