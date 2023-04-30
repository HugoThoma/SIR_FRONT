import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Personne} from "./personne";
@Injectable({
  providedIn: 'root'
})
export class BackPersonneService {

  constructor(private http: HttpClient) { }
  getPersonnes(): Observable<any[]>{
    this.http.get<any[]>('http://localhost:8080/personne/all').subscribe((data) =>(
      console.log(data)
    ));
    return this.http.get<any[]>('http://localhost:8080/personne/all');

  }
  postPerson(user : Personne){
    return this.http.post<Personne>('http://localhost:8080/personne/addPersonne',user)
  }
}
