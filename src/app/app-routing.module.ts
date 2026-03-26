import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordhideComponent } from './pages/passwordhide/passwordhide.component';
import { DisbleformComponent } from './pages/disbleform/disbleform.component';

const routes: Routes = [
  { path: 'passwordhide', component: PasswordhideComponent },
  { path: 'disableForm', component: DisbleformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
