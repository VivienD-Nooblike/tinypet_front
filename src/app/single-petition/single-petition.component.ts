import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Petition } from 'src/models/petition.model';
import { PetitionsService } from 'src/services/petitions-list.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-single-petition',
  templateUrl: './single-petition.component.html',
  styleUrls: ['./single-petition.component.scss']
})
export class SinglePetitionComponent implements OnInit {

  petition!: Petition;
  buttonText!: string;
  petitions$!: Observable<Petition>;

  constructor(private petitionsService: PetitionsService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = "Signer la pétition";
    const petitionId = +this.route.snapshot.params['id'];
    //this.petitionsService.getPetitionByID(this.petitionId)
    this.petitions$ = this.petitionsService.getPetitionByID(petitionId);
  }

  onSign() {
    if (this.buttonText == "Signer la pétition") {
      this.petitionsService.SignPetitionById(this.petition.id, 'sign');
      this.buttonText = "Retirer sa signature";
    } else {
      this.petitionsService.SignPetitionById(this.petition.id, 'unsign');
      this.buttonText = "Signer la pétition";
    }
  }

}
