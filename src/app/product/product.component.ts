import { Component, OnInit } from '@angular/core';

interface Product {
  image: string;
  name: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product: Product[] = [
    {
      image: "assets/images/product/Camera.jpeg",
      name: "DSLR Camera",
    },
    {
      image: "assets/images/product/headphone.jpeg",
      name: "Boat Headphone",
    },
    {
      image: "assets/images/product/smart watch.jpeg",
      name: "Apple Watch",
    }
  ]

}
