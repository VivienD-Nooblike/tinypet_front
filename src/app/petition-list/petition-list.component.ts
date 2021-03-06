import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Petition } from 'src/models/petition.model';
import { PetitionsService } from 'src/services/petitions-list.service';

@Component({
  selector: 'app-petition-list',
  templateUrl: './petition-list.component.html',
  styleUrls: ['./petition-list.component.scss']
})
export class PetitionListComponent implements OnInit {

  petitions$!: Observable<Petition[]>;

  constructor(private petitionsService: PetitionsService) { }

  ngOnInit(): void {
    this.petitions$ = this.petitionsService.getAllPetitions();
  }

}
