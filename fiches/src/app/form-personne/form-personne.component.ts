import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Personne} from "../personne";

class personne {
}

@Component({
  selector: 'app-form-personne',
  templateUrl: './form-personne.component.html',
  styleUrls: ['./form-personne.component.css']
})
export class FormPersonneComponent {
  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':  "*",
        "Access-Control-Allow-Credentials": "true",
       "Access-Control-Allow-Headers": "origin, content-type, accept, authorization",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, HEAD",
    });
    const options = { headers: headers };
    const personne = { nom: form.value.name };
    this.http.post('http://localhost:8080/personne/addPersonne/' + personne.nom, null, options)
      .subscribe(response => {
        console.log(response);
        form.reset();
      });

  }
}
