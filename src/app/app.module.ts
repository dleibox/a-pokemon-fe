import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { ACoreModule } from './modules/core/core.module';
import { ASharedModule } from './modules/shared/shared.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, ACoreModule.forRoot(), ASharedModule, StoreModule.forRoot({}), EffectsModule.forRoot([])],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
