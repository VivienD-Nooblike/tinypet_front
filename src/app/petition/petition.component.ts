import { Component, OnInit, Input } from '@angular/core';
import { Petition } from 'src/models/petition.model';

@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.scss']
})
export class PetitionComponent implements OnInit {
  @Input() petition!: Petition;

  buttonText!: string;



  ngOnInit() {
    this.buttonText = "Signer la pétition.";
  }

  onSignature() {
    if (this.buttonText == "Signer la pétition.") {
      this.petition.signatureNumber++;
      this.buttonText = "Déjà signé";
    } else {
      this.petition.signatureNumber--;
      this.buttonText = "Signer la pétition.";
    }
  }
  
}
