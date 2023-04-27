import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackFicheService {

  constructor(private http: HttpClient) { }
  getFiches(){
    this.http.get('http://localhost:8080/pet/1').subscribe((data) =>
    console.log(data));
    //TODO  CORS problem => proxy needed
  }
}
