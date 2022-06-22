import { Component, OnInit } from '@angular/core';
import { Petition } from 'src/models/petition.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  petition1!: Petition;
  petition2!: Petition;
  petition3!: Petition;

  ngOnInit() {
    this.petition1 = new Petition(
      "1", "HU-GO", "mourir", "aled", 99
    );
    this.petition2 = new Petition(
      "2", "Vivien", "oui", "non", 49
    );
    this.petition3 = new Petition(
      "3", "Molli", "peut", "etre", 24
    );
  }



}
