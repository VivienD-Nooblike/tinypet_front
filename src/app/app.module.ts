import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { PetitionComponent } from './petition/petition.component';
import { HeaderComponent } from './header/header.component';
import { PetitionListComponent } from './petition-list/petition-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SinglePetitionComponent } from './single-petition/single-petition.component';

@NgModule({
  declarations: [
    AppComponent,
    PetitionComponent,
    HeaderComponent,
    PetitionListComponent,
    LandingPageComponent,
    SinglePetitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
