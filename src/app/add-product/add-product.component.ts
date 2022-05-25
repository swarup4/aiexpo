import { Component, OnInit } from '@angular/core';
import { AddProductService } from './add-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  imageObj: any;
  imageName: string = "";

  constructor(private addProductService: AddProductService) { }

  ngOnInit(): void {
  }

  onChange(event: any){
    const FILE = event.target.files[0];
    this.imageName = FILE.name;
    
    this.imageObj = FILE;
  }

  addProduct() {
    const imageForm = new FormData();
    imageForm.append('image', this.imageObj);

    // this.addProjectService.fileUpload(imageForm).subscribe(res => {
    //   console.log(res);
    // });
  }

}
