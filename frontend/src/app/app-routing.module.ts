import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationFormComponent } from './pages/information-form/information-form.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'form', component: InformationFormComponent },
  { path: 'details', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
