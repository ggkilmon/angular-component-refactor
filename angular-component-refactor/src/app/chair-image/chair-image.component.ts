import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chair-image',
  templateUrl: './chair-image.component.html',
  styleUrls: ['./chair-image.component.less']
})
export class ChairImageComponent {
    @Input("image-url") imageUrl: string = "";
    @Input("chair-name") name: string = "";
    @Output("chair-click") selectChairEmit = new EventEmitter<string>();

    selectChair(name: string){
        this.selectChairEmit.emit(name);
    }
}