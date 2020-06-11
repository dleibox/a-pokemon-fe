import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppErrorModule } from './modules/error/app-error.module';
import { ACoreModule } from './modules/core/core.module';
import { ASharedModule } from './modules/shared/shared.module';
import { AppComponent } from './app.component';

import { contextReducer, errorReducer } from './state-store';
import { ARoutingEffects } from './state-store/routing.effects';
import { AppErrorHandler } from './modules/error/app-error.handler';
import { Log } from './modules/core/decorators/app-decorators';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AppErrorModule.forRoot(),
        ACoreModule.forRoot(),
        ASharedModule,
        StoreModule.forRoot({ context: contextReducer, error: errorReducer }),
        EffectsModule.forRoot([ARoutingEffects]),
        StoreRouterConnectingModule.forRoot(),
    ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: AppErrorHandler,
        },
    ],
    bootstrap: [AppComponent],
})
@Log()
export class AppModule {}
