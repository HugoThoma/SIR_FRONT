import { Component } from '@angular/core';
import {Fiche} from "../fiche";
import {BackFicheService} from "../back-fiche.service";

@Component({
  selector: 'app-composant',
  templateUrl: './composant.component.html',
  styleUrls: ['./composant.component.css']
})
export class ComposantComponent {
id:String='';
fiches : Fiche[]=[]
  constructor(private backficheService :BackFicheService) {
    this.fiches.push(new Fiche('1','bug explication','1','1','20/04/2024'))
    this.fiches.push(new Fiche('2','features request','1','1','22/04/2024'))

  }
  ngOnInit(){
  this.backficheService.getFiches();
  this.backficheService.getUnefiche()

  }
}
