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
  // tslint:disable-next-line:max-line-length
  constructor(public cdrpService: CdrpService, public dialogRef: MatDialogRef< DeletetrajectoryComponent>, @Inject(MAT_DIALOG_DATA) public data: LongRange) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  delete() {
    console.log(this.data);
    // console.log('deleted');
// this.cdrpService. deleteExpectedDataCategory(this.data);
this.cdrpService.deleteExpectedDataCategory(this.data).subscribe((res: Response) => {
  console.log(res);
  // this.result = res.json();
  this.result = res.text().toString();
  console.log(this.result);
});
   // this.dialogRef.close(this.result);
   this.dialogRef.close('success');
  }
  ngOnInit() {
    // console.log(this.data);
  }

}
