import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { ProjectItems, projectType } from './project-items';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  projectObj: any;
  projectName: string = "";

  projectType: projectType[] = ProjectItems;

  project: any = {
    type: '',
    name: '',
    description: '',
    file: ''
  }

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
  }

  onChange(event: any){
    const FILE = event.target.files[0];
    this.projectName = FILE.name;
    
    this.projectObj = FILE;
  }

  addProject(data: any) {
    // const imageForm = new FormData();
    // imageForm.append('image', this.projectObj);

    this.projectService.addProject(data).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
