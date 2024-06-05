import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./in-memory-data.service";
import {HttpClientModule} from "@angular/common/http";

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import {filterTermsPokemonsReducer} from "./modules/state/filter-pokemons/filter-pokemons.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    /*   provideRouter(routes,withComponentInputBinding(),withDebugTracing()),
       provideClientHydration(),
       //importProvidersFrom(HttpClientModule),
       //HttpClientModule,
       //provideHttpClient(withFetch()),
       importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(ApiInMemoryService,{dataEncapsulation:false})),
   */
    provideStore({
      filterTermsPokemons: filterTermsPokemonsReducer
    }),
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    //HttpClientModule,
    //provideHttpClient(withFetch()),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],

};
