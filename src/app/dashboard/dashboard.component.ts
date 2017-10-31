import { Component, OnInit } from '@angular/core';
import {Policy} from "../policy/policy";
import {PolicyService} from "../policy/policy.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {

  policys:Policy[];
  constructor(private policyService:PolicyService) { }

  ngOnInit() {
      this.policyService.getPolicys().then(policys=>this.policys=policys.slice(1,5))
  }

}
