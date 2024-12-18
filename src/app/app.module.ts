import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudashboardComponent } from './shared/components/studashboard/studashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    StudashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
