import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { InformationFormComponent } from './pages/information-form/information-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserProfileComponent,
    InformationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
