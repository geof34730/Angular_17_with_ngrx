import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import {provideRouter, withComponentInputBinding, withDebugTracing} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./in-memory-data.service";
import {HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
import pokemonData from "./datas/pokemon.data";
import { provideStoreDevtools } from '@ngrx/store-devtools';


export const appConfig: ApplicationConfig = {
  providers: [
    /*   provideRouter(routes,withComponentInputBinding(),withDebugTracing()),
       provideClientHydration(),
       //importProvidersFrom(HttpClientModule),
       //HttpClientModule,
       //provideHttpClient(withFetch()),
       importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(ApiInMemoryService,{dataEncapsulation:false})),
   */
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    //HttpClientModule,
    //provideHttpClient(withFetch()),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],

};
