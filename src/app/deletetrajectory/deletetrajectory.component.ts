import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CdrpService } from '../cdrp.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-deletetrajectory',
  templateUrl: './deletetrajectory.component.html',
  styleUrls: ['./deletetrajectory.component.css']
})
export class DeletetrajectoryComponent implements OnInit {
  result: any;
  Trajectory = [];
  // tslint:disable-next-line:max-line-length
  constructor(public cdrpService: CdrpService, public dialogRef: MatDialogRef< DeletetrajectoryComponent>, @Inject(MAT_DIALOG_DATA) public data: LongRange) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  delete() {
    console.log(this.data);
    // console.log('deleted');
// this.cdrpService. deleteExpectedDataCategory(this.data);
// tslint:disable-next-line:max-line-length
if (this.data === 1) {
  this.Trajectory.push(this.cdrpService.selectedExpectedDatacategory.dataTrajectoryId);
  console.log(this.Trajectory);
  this.cdrpService.deleteDataTrajectory(this.Trajectory).subscribe((res: Response) => {
    console.log(res);
    // this.result = res.json();
    this.result = res.text().toString();
  //  console.log(this.result);
  });
} else {
  // tslint:disable-next-line:max-line-length
  this.cdrpService.deleteExpectedDataCategory(this.cdrpService.selectedExpectedDatacategory.expectedDataCategoryId).subscribe((res: Response) => {
    console.log(res);
    // this.result = res.json();
   // this.result = res.text().toString();
  //  console.log(this.result);
  });
}
// tslint:disable-next-line:max-line-length

   // this.dialogRef.close(this.result);
    this.dialogRef.close('success');
//   this.dialogRef.close();
  }
  ngOnInit() {
    // console.log(this.data);
  }

}
