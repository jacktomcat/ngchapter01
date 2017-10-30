import { Component } from '@angular/core';


//仅次于 import 语句。
export class Hero {
    id: number;
    name: string;
}

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent{
    title = "titles";
    heroes = HEROES;
    /*selectedHero: Hero = {
        id: 1,
        name: 'Windstorm'
    };*/

    selectedHero : Hero;



    selectVal(sel:Hero):void{
        this.selectedHero = sel;
    }
}
