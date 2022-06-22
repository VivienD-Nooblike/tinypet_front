import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Petition } from "src/models/petition.model";
import { __values } from "tslib";

@Injectable({
  providedIn: 'root'
})

export class PetitionsService {

  baseUrl = 'https://tinypetback.nw.r.appspot.com';

  constructor(private http: HttpClient) {

  }

  petitions: Petition[] = [];
  currentPetition!: Petition;

  getAllPetitions(): Observable<Petition[]> {
    console.log('TEST');
    return this.http.get<Petition[]>(this.baseUrl + '/petitions');
  }

  getPetitionByID(petitionId : number) : Observable<Petition> {
    return this.http.get<Petition>(this.baseUrl + '/petition/' + petitionId);
    /*if (!petition) {
      throw new Error('Pétition introuvable');
    } else {
      console.log('trouvé');
      return petition;
    }*/
  }

  SignPetitionById(petitionId: number, signType : 'sign' | 'unsign'): void {
    const petition = this.getPetitionByID(petitionId);
    //signType === 'sign' ? petition.signatureNumber++ : petition.signatureNumber --;
  }

}