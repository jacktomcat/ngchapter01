import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

/*export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/


export class HomeComponent{
    @Input("too")
    text = "please input message"
    /**事件绑定**/
    clear(val){
        val.value="";
        console.log("清空了内容");
    }
}