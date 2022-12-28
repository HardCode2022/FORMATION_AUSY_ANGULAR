import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.css']
})
export class UserRatingComponent implements OnChanges {

 @Input() note : string;
 @Input() age : number;

 ratio:number;

 statusNormal:boolean=false;
 statusEleve:boolean=false;
 statusHP: boolean=false;

  constructor() { }

  ngOnChanges(): void {

  this.ratio=this.age/parseInt(this.note)
     if (this.ratio < 7) {
           this.statusHP=true;
       }else if(this.ratio>=8){
           this.statusEleve=true;
     }else {
         this.statusNormal=true;
     }

  }

  ngOnInit(): void {
    console.log('on InInit')
  }

}
