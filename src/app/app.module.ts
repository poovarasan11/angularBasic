import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuceessAlertComponent } from './suceess-alert/suceess-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertMessageComponent,
    WarningAlertComponent,
    SuceessAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
