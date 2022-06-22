import { Injectable } from "@angular/core";
import { Petition } from "src/models/petition.model";

@Injectable({
  providedIn: 'root'
})

export class PetitionsService {
  petitions: Petition[] = [
    {
      id: "1",
      creator: "HU-GO",
      title: "mourir", 
      description: "aled",
      nbSigna: 255,
      tag: "culture"
    },
    {
      id: "2",
      creator: "Vivien",
      title: "oui", 
      description: "non",
      nbSigna: 120,
      tag: "sport"
    },
    {
      id: "3",
      creator: "Molli",
      title: "peut-", 
      description: "être",
      nbSigna: 25,
    }
  ];

  getAllPetitions(): Petition[] {
    return this.petitions;
  }

  getPetitionByID(petitionId : string) : Petition {
    const petition = this.petitions.find(petition => petition.id === petition.id);
    if (!petition) {
      throw new Error('Pétition introuvable');
    } else {
      return petition;
    }
  }

  SignPetitionById(petitionId: string, signType : 'sign' | 'unsign'): void {
    const petition = this.getPetitionByID(petitionId);
    signType === 'sign' ? petition.nbSigna++ : petition.nbSigna --;
  }

}