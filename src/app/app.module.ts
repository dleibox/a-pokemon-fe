import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { ACoreModule } from './modules/core/core.module';
import { ASharedModule } from './modules/shared/shared.module';
import { AppComponent } from './app.component';

import { contextReducer } from './state-store/context.reducer';
import { ARoutingEffects } from './state-store/routing.effects';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ACoreModule.forRoot(),
        ASharedModule,
        StoreModule.forRoot({ context: contextReducer }),
        EffectsModule.forRoot([ARoutingEffects]),
        StoreRouterConnectingModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
