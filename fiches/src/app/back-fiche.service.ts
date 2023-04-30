import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackFicheService {

  constructor(private http: HttpClient) { }
  getFiches(): Observable<any[]>{
    this.http.get<any[]>('http://localhost:8080/fiche/all').subscribe((data) =>(
      console.log(data)
    ));
    return this.http.get<any[]>('http://localhost:8080/fiche/all');

  }
  getUnefiche(){
    this.http.get('http://localhost:8080/fiche/bug').subscribe((data) =>
      console.log(data));

  }

}
