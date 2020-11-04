import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ACoreModule } from './modules/core/core.module';
import { Log } from './modules/core/decorators/app-decorators';
import { ACONFIG, appConfig } from './modules/core/service/data.service';
import { AppErrorHandler } from './modules/error/app-error.handler';
import { AppErrorModule } from './modules/error/app-error.module';
import { ASharedModule } from './modules/shared/shared.module';
import { contextReducer, errorReducer } from './state-store';
import { ARoutingEffects } from './state-store/routing.effects';

export function loadConfig(httpClient: HttpClient): () => Promise<any> {
    return () =>
        httpClient
            .get(environment.appConfig)
            .toPromise()
            .then((settings: ACONFIG) => {
                appConfig.production = settings.production;
                appConfig.pokemonApiUrl = settings.pokemonApiUrl;

                console.log(`appConfig:`, appConfig);

                return settings;
            });
}

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
        StoreRouterConnectingModule.forRoot()
    ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: AppErrorHandler
        },
        {
            provide: APP_INITIALIZER,
            useFactory: loadConfig,
            deps: [HttpClient],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
@Log()
export class AppModule {}
