import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay,} from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {appIdInterceptor} from './core/interceptors/app-id.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withInterceptors([appIdInterceptor])
    )
  ],
};
