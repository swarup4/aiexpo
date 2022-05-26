import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.scss']
})
export class SeeMoreComponent implements OnInit {

  projectHeading = '';
  projectDetails = ''

  constructor(
    public dialogRef: MatDialogRef<SeeMoreComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.projectHeading = data.heading;
      this.projectDetails = data.details;
    }

  ngOnInit(): void {
  }

}
