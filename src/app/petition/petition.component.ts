import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.scss']
})
export class PetitionComponent implements OnInit {
  id!: string;          // !: pour passer outre la non initialisation au moment de l'écriture de ctruc
  creator!: string;
  title!: string;
  description!: string;
  //tags!: jsp tablo de string
  //fields jsp
  signatureNumber!: number;

  ngOnInit() {
    this.id = "1";
    this.creator = "HU-GO";
    this.title = "mourir";
    this.description = "aled";
    this.signatureNumber = 999;
  }
  
}
