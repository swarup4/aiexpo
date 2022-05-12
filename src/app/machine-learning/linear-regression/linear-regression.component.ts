import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  details: string;
  theme: string;
}

@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.scss']
})
export class LinearRegressionComponent implements OnInit {

  pageName: string = 'Linear Regrassion';

  product: Product[] = [
    {
      id: 1,
      name: "DSLR",
      details: "DSLR Camera",
      theme: "bg-warning"
    }, {
      id: 2,
      name: "Boat",
      details: "Boat Headphone",
      theme: "bg-primary"
    }, {
      id: 3,
      name: "Apple",
      details: "Apple Watch",
      theme: "bg-success"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
