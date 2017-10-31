import { Injectable } from '@angular/core';
import {Policy} from "./Policy";


const POLICYS: Policy[] = [
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
export class PolicyService {

  constructor() { }

  getPolicysList():Policy[]{
      return POLICYS;
  }

  //异步方式进行调用
  getPolicys(): Promise<Policy[]> {
      return Promise.resolve(POLICYS);
  }


  getPolicysSlowly(): Promise<Policy[]> {
      return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getPolicys()), 2000);
      });
  }

    /*getPolicy(id: number): Policy {
      return this.getPolicysList().find(policy => policy.id===id)
    }*/

    getPolicy(id: number): Promise<Policy> {
        return this.getPolicys().then(policy=>policy.find(policy=>policy.id==id));
    }

}
