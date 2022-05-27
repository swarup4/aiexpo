import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  projectId: string = '';

  constructor(private projectService: ProjectService,
    public dialogRef: MatDialogRef<AddProjectComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      
      if(data && data != null){
        this.projectId = data.id;
        this.project.name = data.name;
        this.project.description = data.description;
      }
  }

  ngOnInit(): void {
  }

  onChange(event: any) {
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

  removeEmptyObj(obj: any) {
    for (let key in obj) {
      if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
        delete obj[key];
      }
    }
    return obj
  }

  editProject(id: string, data: any) {
    this.projectService.editProject(id, this.removeEmptyObj(data)).subscribe(res => {
      console.log(res);
      // this.projectData = res;
    }, err => {
      console.log(err);
    });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.projectId });
  }

}
