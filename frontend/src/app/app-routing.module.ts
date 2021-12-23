import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationFormComponent } from './pages/information-form/information-form.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: 'form', component: InformationFormComponent },
  { path: 'details', component: UserProfileComponent },
  { path: '', component: WelcomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
