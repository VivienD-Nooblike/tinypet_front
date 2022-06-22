import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Petition } from 'src/models/petition.model';
import { PetitionsService } from 'src/services/petitions-list.service';

@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.scss']
})
export class PetitionComponent implements OnInit {
  @Input() petition!: Petition;
  buttonText!: string;

  constructor(private petitionsService: PetitionsService,
              private router: Router) {}


  ngOnInit() {
    this.buttonText = "Signer la pétition";
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

  onViewPetition() {
    this.router.navigateByUrl('petitions/${this.petition.id}');
  }
  
}
