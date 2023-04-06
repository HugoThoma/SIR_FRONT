import {Component, Input} from '@angular/core';
import {PokeDetail} from "../pokemon";

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css']
})
export class PokedetailComponent {
    @Input('detail')
    detail : PokeDetail
}
