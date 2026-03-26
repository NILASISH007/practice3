import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordhideComponent } from './pages/passwordhide/passwordhide.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DisbleformComponent } from './pages/disbleform/disbleform.component';
import { AddFormElementComponent } from './pages/add-form-element/add-form-element.component';

@NgModule({
  declarations: [AppComponent, PasswordhideComponent, DisbleformComponent, AddFormElementComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
