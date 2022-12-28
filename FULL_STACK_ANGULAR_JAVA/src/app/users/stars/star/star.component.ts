import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

   @Input()
   note = 0

  starWidth = 0;

  @Output()
  noteClik: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.note * 25 / 5;
  }

  onClick(): void {
    this.noteClik.emit(`${this.note}`);
  }
}
