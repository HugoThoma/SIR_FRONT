import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-form-fiche',
  templateUrl: './form-fiche.component.html',
  styleUrls: ['./form-fiche.component.css']
})
export class FormFicheComponent {

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    const fiche = {
      title: form.value.title,
      description: form.value.description,
      support: form.value.support
    };
    this.http.post('http://localhost:8080/fiche/addFiche', fiche)
      .subscribe(response => {
        console.log(response);
        form.reset();
      });
  }
}
