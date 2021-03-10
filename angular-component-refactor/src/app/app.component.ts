import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-component-refactor';
  selectedChair: string = "";

  selectChair(chair: string){
    console.log(chair);
    this.selectedChair = chair;
  }
}
