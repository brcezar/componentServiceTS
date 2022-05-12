import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BadgeComponent } from './components/badge/badge.component';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonComponent } from './components/button/button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, ButtonComponent, AlertComponent, BadgeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
