import { Component,OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PolicyService} from "./policy.service";
import {Policy} from "./policy";

@Component({
  selector: 'policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})


export class PolicyListComponent implements OnInit{

  policys:Policy[];
  selectedPolicy:Policy;

constructor(private router: Router,private policyService:PolicyService) { }

  getPolicys():void{
      this.policyService.getPolicys().then(policys=>this.policys=policys);
  }

  //异步调用结果
  ngOnInit(): void {
      this.getPolicys();
  }

  onSelect(select):void{
      this.selectedPolicy=select;
  }

  gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedPolicy.id]);
  }
}
