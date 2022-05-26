import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from 'src/app/add-project/project.service';
import { SeeMoreComponent } from 'src/app/common/see-more/see-more.component';


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

  constructor(private projectService: ProjectService, private dialog: MatDialog) { }

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

  seeMore(heading: string, details: string){
    const dialogRef = this.dialog.open(SeeMoreComponent, {
      data: { 
        heading: heading,
        details: details
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
