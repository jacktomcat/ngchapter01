import { Component,Input} from '@angular/core';
import {Hero} from "../common/Hero";

@Component({
  selector: 'result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})


export class ResultDetailComponent{

  @Input()
  hero : Hero;

}
