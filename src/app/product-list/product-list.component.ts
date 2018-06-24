import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	showImage: boolean = false;
	_listFilter: string;
	pageTitle: string = 'Product List';
	filteredProducts: IProduct[];
	products: IProduct[] = [
		{
			"id": 1,
			"name": "Garden Cart",
			"code": "GDN-2030",
			"description": "15 gallon capacity",
			"price": 12.52,
			"starRating": 4.2,
			"uri":"https://openclipart.org/image/300px/svg_to_png/58471/garden-cart.png",
			"imageWidth": 30,
			"imageMargin": 2
   	},
   	{
			"id": 2,
			"name": "Hammer",
			"code": "HMM-2100",
			"description": "Curved claw steel",
			"price": 30.52,
			"starRating": 4.8,
			"uri": "https://openclipart.org/image/300px/svg_to_png/4793/david-benjamin-Hammer.png",
			"imageWidth": 30,
			"imageMargin": 2
   	}
	];

  constructor() { 
  	this.filteredProducts = this.products;
  	this._listFilter = '';
  }

  ngOnInit() {
  }

	toggleImage(): void {   
		this.showImage = !this.showImage;
  }

	get listFilter(): string {   
  	return this._listFilter;
  }

	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

	performFilter(filterBy: string): IProduct[] {   
		filterBy = filterBy.toLocaleLowerCase();
		return this.products.filter((product: IProduct) => 
			product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
	}

}
