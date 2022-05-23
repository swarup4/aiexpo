import { Component, OnInit } from '@angular/core';
import { AddProjectService } from './add-project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  imageObj: any;
  imageName: string = "";

  constructor(private addProjectService: AddProjectService) { }

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
