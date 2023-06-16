import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'confirmation', component: ConfirmationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
