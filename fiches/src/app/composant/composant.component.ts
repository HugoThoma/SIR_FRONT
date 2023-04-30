import { Component } from '@angular/core';
import {Fiche} from "../fiche";
import {BackFicheService} from "../back-fiche.service";
import {Personne} from "../personne";
import {BackPersonneService} from "../back-personne.service";

@Component({
  selector: 'app-composant',
  templateUrl: './composant.component.html',
  styleUrls: ['./composant.component.css'],
  providers: [BackFicheService]
})
export class ComposantComponent {
id:String='';
fiches : Fiche[]=[];
personnes : Personne[]=[]

  constructor(private backficheService :BackFicheService,private backpersonneService :BackPersonneService) {
    this.fiches.push(new Fiche('1','bug explication','1','1','20/04/2024'))
    this.fiches.push(new Fiche('2','features request','1','1','22/04/2024'))

  }
  ngOnInit(){
  this.backficheService.getFiches().subscribe((data) =>
    data.forEach((value) =>{
      var f = new Fiche(value.id,value.titre,value.support,value.user,value.emission)
      this.fiches.push(f);
    }));;
    this.backpersonneService.getPersonnes().subscribe((data) =>
      data.forEach((value) =>{
        var p = new Personne(value.id,value.name)
        this.personnes.push(p);
      }));;


  }
}
