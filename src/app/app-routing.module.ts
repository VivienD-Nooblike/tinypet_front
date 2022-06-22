import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { PetitionListComponent } from "./petition-list/petition-list.component";
import { SinglePetitionComponent } from "./single-petition/single-petition.component";

const routes: Routes = [
  { path: 'petitions/:id', component: SinglePetitionComponent},
  { path: 'petitions', component: PetitionListComponent},
  { path: '', component: LandingPageComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}