import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
id : string ='';
selectedPokeId : string='';
searchPokeName : string='';
pokes: Pokemon[] = []
constructor() {
  this.pokes.push(new Pokemon('1','Pikachu'))
  this.pokes.push(new Pokemon('2','Salamèche'))
  this.pokes.push(new Pokemon('3','Bulbizare'))
  this.pokes.push(new Pokemon('4','Carapuce'))
  this.pokes.push(new Pokemon('5','Dracaufeu'))
}
  ngOnInit():void{}
  go(){
  console.log(this.selectedPokeId)
  }
}
