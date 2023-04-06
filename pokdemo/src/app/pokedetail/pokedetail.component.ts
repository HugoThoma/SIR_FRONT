import {Component, Input} from '@angular/core';
import {PokeDetail} from "../pokemon";
import {PokeShareInfoService} from "../poke-share-info.service";

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css'],
  providers : []
})
export class PokedetailComponent {
    @Input('detail')
    detail : PokeDetail
  constructor(private pokeShareInfo : PokeShareInfoService) {
      this.pokeShareInfo.getObservable().
      subscribe((e=> console.log('e'+e)))
  }
  ngOnInit():void{
      console.log(this.pokeShareInfo.getvalue())
  }
}
