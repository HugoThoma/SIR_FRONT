export interface Fiches {
  id:          number;
  titre:       string;
  description: null;
  emission:    null;
  encharge:    null;
  cloture:     null;
  support:     null;
  user:        null;
  tag:         null;
}

export class Fiche {
  constructor(public id:string, public title: string, public support: string,public user: string,public dateEmission: string) {

  }
}
