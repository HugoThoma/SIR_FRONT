import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  constructor() { }

  value : String
  getvalue(): String{
    return this.value;
  }
  setvalue(value: String){
    this.value= value;
  }
}
