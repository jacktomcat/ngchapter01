import { Component,Input,OnInit} from '@angular/core';
import {Policy} from "./policy";
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {PolicyService} from "./policy.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'policy-view',
  templateUrl: './policy-view.component.html'
})


export class PolicyViewComponent implements OnInit{

    constructor(private policyService: PolicyService,
                private route: ActivatedRoute,
                private location: Location){}

    @Input()
    policy : Policy;

    ngOnInit(): void {
        this.route.params
            //.map(params=>params["id"])
            .switchMap(params => this.policyService.getPolicy(+params["id"]))
            .subscribe(policy => this.policy = policy);
    }

    clear(keywords):void{
        keywords.value="";
    }

    goBack():void{
        this.location.back();
    }

}
