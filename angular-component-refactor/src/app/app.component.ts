import { Chair } from './models/chair.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'angular-component-refactor';
  selectedChair: string = "";

  chairs: Chair[] = [];

  ngOnInit(){
    this.chairs = [
      {name: "Aeron", imageUrl: "/assets/aeron.jpg"},
      {name: "Cosm", imageUrl: "/assets/cosm.jpg"},
      {name: "Embody", imageUrl: "/assets/embody.jpg"},
      {name: "Mirra 2", imageUrl: "/assets/mirra2.jpg"},
      {name: "Celle", imageUrl: "/assets/celle.jpg"},
    ];
  }

  selectChair(chair: string){
    console.log(chair);
    this.selectedChair = chair;
  }
}
