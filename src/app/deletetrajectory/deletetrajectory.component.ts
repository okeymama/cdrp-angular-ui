import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-deletetrajectory',
  templateUrl: './deletetrajectory.component.html',
  styleUrls: ['./deletetrajectory.component.css']
})
export class DeletetrajectoryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef< DeletetrajectoryComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  delete() {
    console.log(this.data);
    console.log('deleted');
    this.dialogRef.close('deleted');
  }
  ngOnInit() {
  }

}
