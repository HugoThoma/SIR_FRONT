import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {PokeDetail, Pokemon} from "../pokemon";
import {PokeAPIServiceService} from "../poke-apiservice.service";
import {PokeShareInfoService} from "../poke-share-info.service";

// @ts-ignore
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers : [PokeAPIServiceService,PokeShareInfoService],
})
export class MyComponentComponent {
id : string ='';
selectedPokeId : string='';
searchPokeName : string='';
pokeDetail : PokeDetail;
pokes: Pokemon[] = []
constructor(private pokeService : PokeAPIServiceService,private pokeShareInfo : PokeShareInfoService) {
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
  this.pokeShareInfo.setvalue(this.selectedPokeId)
    if(this.selectedPokeId != ''){
      this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe(data =>
      this.pokeDetail= data)
    }
  }
}
