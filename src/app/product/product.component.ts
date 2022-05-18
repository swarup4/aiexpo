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

  pageName: string = 'Product';

  product: Product[] = [
    {
      id: 1,
      image: "https://aiexpo.s3.amazonaws.com/ui/product/Camera.jpeg",
      name: "DSLR Camera",
    },
    {
      id: 2,
      image: "https://aiexpo.s3.amazonaws.com/ui/product/headphone.jpeg",
      name: "Boat Headphone",
    },
    {
      id: 3,
      image: "https://aiexpo.s3.amazonaws.com/ui/product/smart watch.jpeg",
      name: "Apple Watch",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
