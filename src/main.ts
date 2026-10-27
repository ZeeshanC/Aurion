import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withComponentInputBinding, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { applyTheme } from './theme/theme.config';
import { provideZonelessChangeDetection } from '@angular/core';

applyTheme();

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'md', rippleEffect: true, animated: true }),
    provideZonelessChangeDetection(),
    provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding()),
    {
      provide: MAT_RIPPLE_GLOBAL_OPTIONS,
      useValue: {
        color: 'rgba(255, 255, 255, 0.28)',
        animation: { enterDuration: 320, exitDuration: 420 },
      },
    },
  ],
});
