export class Petition {  
  constructor(public id: string,          //raccourci pour pas tout redéclarer
              public creator: string, 
              public title: string, 
              public description: string, 
              public signatureNumber: number) {
  }
}