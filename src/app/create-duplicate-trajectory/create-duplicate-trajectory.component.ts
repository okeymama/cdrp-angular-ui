import { Component, OnInit, Inject , OnDestroy} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '../../../node_modules/@angular/router';
import { CdrpService } from '../cdrp.service';

@Component({
  selector: 'app-create-duplicate-trajectory',
  templateUrl: './create-duplicate-trajectory.component.html',
  styleUrls: ['./create-duplicate-trajectory.component.css']
})
export class CreateDuplicateTrajectoryComponent implements OnInit, OnDestroy {

  trajectoryName: string;
  trajectoryDescription: string;

  constructor(private router: Router, private cdrpService: CdrpService, public dialogRef3: MatDialogRef<CreateDuplicateTrajectoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

    previousDialog(): void {
      this.dialogRef3.close();
    }
    onClose() {
      console.log('close called');
      this.dialogRef3.close('closeAll');
    }

    ngOnInit() {
      Array.from(document.querySelectorAll('.cdk-overlay-container .cdk-global-overlay-wrapper'))
      .forEach((node, index, array) => (index !== array.length - 1) ? (<HTMLElement> node).style.display = 'none' : true);
    }

    ngOnDestroy() {
      Array.from(document.querySelectorAll('.cdk-overlay-container .cdk-global-overlay-wrapper'))
      .forEach((node, index, array) => (index !== array.length - 2) ? (<HTMLElement> node).style.display = '' : true);
    }

    createDataTrajectory(form) {
      console.log('navigating');
      this.trajectoryName =  form.value.trajectoryName;
      this.trajectoryDescription = form.value.description;
      this.onClose();
      this.cdrpService.setTrajectoryName(this.trajectoryName);
      this.router.navigate(['/nav/trajectory']);
    }

}
