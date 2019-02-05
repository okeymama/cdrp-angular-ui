import { Component, OnInit, Inject , OnDestroy} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '../../../node_modules/@angular/router';
import { CdrpService } from '../cdrp.service';

@Component({
  selector: 'app-create-data-trajectory',
  templateUrl: './create-data-trajectory.component.html',
  styleUrls: ['./create-data-trajectory.component.css']
})
export class CreateDataTrajectoryComponent implements OnInit, OnDestroy {

  trajectoryName: string;
  trajectoryDescription: string;

  constructor(private router: Router, private cdrpService: CdrpService, public dialogRef2: MatDialogRef<CreateDataTrajectoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  previousDialog(): void {
    this.dialogRef2.close();
  }

  onClose() {
    this.dialogRef2.close('closeAll');
  }

  createDataTrajectory(form) {
    // console.log('navigating' + form.value.trajectoryName + " "+ form.value.description);
    this.cdrpService.setNewTrajectoryData(form.value.trajectoryName, form.value.description);
    this.trajectoryName =  form.value.trajectoryName;
    this.trajectoryDescription = form.value.description;
    this.dialogRef2.close('closeAll');
   // this.cdrpService.setTrajectoryName(this.trajectoryName);
    this.router.navigate(['/nav/trajectory']);

  }

  ngOnInit() {
    Array.from(document.querySelectorAll('.cdk-overlay-container .cdk-global-overlay-wrapper'))
    .forEach((node, index, array) => (index !== array.length - 1) ? (<HTMLElement> node).style.display = 'none' : true);
  }

  ngOnDestroy() {
    Array.from(document.querySelectorAll('.cdk-overlay-container .cdk-global-overlay-wrapper'))
     .forEach((node, index, array) => (index !== array.length - 2) ? (<HTMLElement> node).style.display = '' : true);
  }

}
