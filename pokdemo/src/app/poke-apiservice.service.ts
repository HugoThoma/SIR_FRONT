import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {PokeServiceRes} from "./pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {

  constructor(private http:HttpClient) {}
  // typer le service avce un type qu'on connait et le définir dans pokemon.ts
  getPokemons(): Observable<PokeServiceRes>{
    return this.http.get<PokeServiceRes>('http://pokeapi.co/api/v2/pokemon/')
    //this.http.get('http://pokeapi.co/api/v2/pokemon/').subscribe((data) =>
    //     console.log(data));
  }
}
