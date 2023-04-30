import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantComponent } from './composant/composant.component';
import { FormFicheComponent } from './form-fiche/form-fiche.component';
import { FormPersonneComponent } from './form-personne/form-personne.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposantComponent,
    FormFicheComponent,
    FormPersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
