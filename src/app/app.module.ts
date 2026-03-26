import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordhideComponent } from './pages/passwordhide/passwordhide.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DisbleformComponent } from './pages/disbleform/disbleform.component';

@NgModule({
  declarations: [AppComponent, PasswordhideComponent, DisbleformComponent],
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
