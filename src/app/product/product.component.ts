import { Component, OnInit } from '@angular/core';

interface Product {
  id: number
  image: string;
  name: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product[] = [
    {
      id: 1,
      image: "assets/images/product/Camera.jpeg",
      name: "DSLR Camera",
    },
    {
      id: 2,
      image: "assets/images/product/headphone.jpeg",
      name: "Boat Headphone",
    },
    {
      id: 3,
      image: "assets/images/product/smart watch.jpeg",
      name: "Apple Watch",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
