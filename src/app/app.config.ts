import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {PreloadAllModules, provideRouter, withPreloading} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay,} from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {appIdInterceptor} from './core/interceptors/app-id.interceptor';
import {provideNzI18n, uk_UA} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import uk from '@angular/common/locales/uk';
import {FormsModule} from '@angular/forms';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {errorInterceptor} from './core/interceptors/error.interceptor';

registerLocaleData(uk);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withInterceptors([appIdInterceptor, errorInterceptor])
    ), provideNzI18n(uk_UA),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync()

  ],
};
