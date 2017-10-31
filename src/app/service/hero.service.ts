import { Injectable } from '@angular/core';
import {Hero} from "../common/Hero";


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

//注意，我们导入了 Angular 的Injectable函数，并作为@Injectable()装饰器使用这个函数
@Injectable()
export class HeroService {

  constructor() { }

  /*getHeros():Hero[]{
      return HEROES;
  }*/

  //异步方式进行调用
  getHeroes(): Promise<Hero[]> {
      return Promise.resolve(HEROES);
  }


  getHeroesSlowly(): Promise<Hero[]> {
      return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getHeroes()), 2000);
      });
  }

}
