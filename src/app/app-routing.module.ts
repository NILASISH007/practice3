import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordhideComponent } from './pages/passwordhide/passwordhide.component';
import { DisbleformComponent } from './pages/disbleform/disbleform.component';
import { AddFormElementComponent } from './pages/add-form-element/add-form-element.component';

const routes: Routes = [
  { path: 'passwordhide', component: PasswordhideComponent },
  { path: 'disableForm', component: DisbleformComponent },
  { path: 'addformelement', component: AddFormElementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
