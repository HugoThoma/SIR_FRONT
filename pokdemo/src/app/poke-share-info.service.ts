import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  value : String
  public stringVar = new Subject<string>()

  constructor() { }

  getvalue(): String{
    return this.value;
  }
  setvalue(value: String){
    this.value= value;
  }
  getObservable():Subject<string>{
    return this.stringVar
  }
  setObservable(newStringVar: string){
    this.stringVar.next(newStringVar)
  }
}
