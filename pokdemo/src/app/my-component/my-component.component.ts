import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {PokeDetail, Pokemon} from "../pokemon";
import {PokeAPIServiceService} from "../poke-apiservice.service";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers : [PokeAPIServiceService]
})
export class MyComponentComponent {
id : string ='';
selectedPokeId : string='';
searchPokeName : string='';
pokeDetail : PokeDetail;
pokes: Pokemon[] = []
constructor(private pokeService : PokeAPIServiceService) {
  this.pokes.push(new Pokemon('1','Pikachu','http://pokeapi.co/api/v2/pokemon/'))
  this.pokes.push(new Pokemon('2','Salamèche','http://pokeapi.co/api/v2/pokemon/'))
  this.pokes.push(new Pokemon('3','Bulbizare','http://pokeapi.co/api/v2/pokemon/'))
  this.pokes.push(new Pokemon('4','Carapuce','http://pokeapi.co/api/v2/pokemon/'))
  this.pokes.push(new Pokemon('5','Dracaufeu','http://pokeapi.co/api/v2/pokemon/'))
}
  ngOnInit():void{
    this.pokeService.getPokemons().subscribe((data) =>
      data.results.forEach((e, index) =>
        {
      this.pokes.push(new Pokemon(''+index,e.name,e.url))
        }))
  }
  go(){
    if(this.selectedPokeId != ''){
      this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe(data =>
      this.pokeDetail= data)
    }
  }
}
