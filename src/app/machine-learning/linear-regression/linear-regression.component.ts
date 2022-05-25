import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/add-project/project.service';


@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.scss']
})
export class LinearRegressionComponent implements OnInit {

  pageName: string = 'Linear Regrassion';

  project: any = [];

  themeList = [
    "bg-warning", "bg-primary", "bg-success", "bg-info", "bg-danger"
  ]

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProject('linear').subscribe((res: any) => {
      let data = res.map((element: any) => ({ ...element, theme: this.getTheme() }));
      this.project = data;
    }, err => {
      console.log(err);
    });
  }

  getTheme() {
    const theme = this.themeList[Math.floor(Math.random() * this.themeList.length)];
    return theme;
  }


}
