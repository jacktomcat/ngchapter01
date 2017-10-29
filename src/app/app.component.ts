import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    //templateUrl: './app.component.html',
    template:`<h1>{{title}}</h1>
            <app-home too="aaa"></app-home>
            `,
    styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'app works,hello!';
}
