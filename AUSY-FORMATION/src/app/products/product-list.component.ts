import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  //selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Liste des proiduts';
  imageWidth:number=50;
  imageMargin:number=2;
  showImage: boolean =false;
  errorMessage:string;

  _listFilter:string ;

  filteredProducts :IProduct[];
  
  products: IProduct[] =[];

  constructor(private productServie:ProductService){

  }

  get listFilter():string{
    return this._listFilter;
  }

 set listFilter(value :string){
       this._listFilter=value;
       this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter) : this.products;
 }



  performFilter(filterBy:string):IProduct[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

  ngOnInit(): void{
    this.productServie.getProduct().subscribe({
       next : products=> {
           this.products=products;
           this.filteredProducts=this.products;
        },
        error : err => this.errorMessage=err
    });

  }

  toggleImage():void{
    this.showImage=!this.showImage;
  }
  onRatingClicked(message:string):void{
    this.pageTitle=` Product List `+ message;
  }

}
