import { Component,Input} from '@angular/core';
import {Policy} from "./policy";

@Component({
  selector: 'policy-view',
  templateUrl: './policy-view.component.html'
})


export class PolicyViewComponent{

    @Input()
    policy : Policy;

    clear(keywords):void{
        keywords.value="";
    }

}
