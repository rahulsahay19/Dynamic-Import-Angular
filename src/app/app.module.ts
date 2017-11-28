import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader } from '@angular/core';

import { provideRoutes } from '@angular/router';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SystemJsNgModuleLoader,
    provideRoutes([
      { loadChildren: 'app/lazy/lazy.module#LazyModule' }
  ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
