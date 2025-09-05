import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AppTranslateModule } from './shared/modules/app-translate.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), { provide: LocationStrategy, useClass: HashLocationStrategy }, importProvidersFrom(HttpClientModule), importProvidersFrom(AppTranslateModule.forRoot())]
};
