import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
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

  private heroesUrl = 'http://localhost:9090/report-alarm-api/policy/list';  // URL to web api

  constructor(private http:Http) { }

  getPolicysList():Policy[]{
      return POLICYS;
  }

  //异步方式进行调用
  getPolicys(): Promise<Policy[]> {
      //return Promise.resolve(POLICYS);

      const headers: Headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');

      const options = new RequestOptions({
          headers: headers
      });

      return this.http.get(this.heroesUrl,options)
          .toPromise()
          .then(response => response.json().data as Policy[])
          .catch(this.handleError);
  }


  getPolicysSlowly(): Promise<Policy[]> {
      return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getPolicys()), 2000);
      });
  }

    getPolicy(id: number): Promise<Policy> {
        //return this.getPolicys().then(policy=>policy.find(policy=>policy.id==id));
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Policy)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
