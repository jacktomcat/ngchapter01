import { Component,OnInit } from '@angular/core';
import {Hero} from '../common/Hero';
import {HeroService} from "../service/hero.service";


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [HeroService]
})



export class ResultComponent implements OnInit{

    title = "titles";
    heroes: Hero[];
    selectedHero : Hero;

    constructor(private heroService: HeroService){
        //同步调用结果
        //this.heroes = heroService.getHeros()
    }

    /*selectedHero: Hero = {
        id: 1,
        name: 'Windstorm'
    };*/

    getHeroes():void{
        this.heroService.getHeroesSlowly().then(heros=>this.heroes=heros);
    }
    //异步调用结果
    ngOnInit(): void {
        this.getHeroes();
    }

    selectVal(sel:Hero):void{
        this.selectedHero = sel;
    }
}
