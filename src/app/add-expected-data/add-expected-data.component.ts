import { Component, OnInit, Inject , OnDestroy, EventEmitter, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormData, AddData} from '../Study';
import { CreateDataTrajectoryComponent } from '../create-data-trajectory/create-data-trajectory.component';
import { CreateDuplicateTrajectoryComponent } from '../create-duplicate-trajectory/create-duplicate-trajectory.component';
import { CdrpService } from '../cdrp.service';

@Component({
  selector: 'app-add-expected-data',
  templateUrl: './add-expected-data.component.html',
  styleUrls: ['./add-expected-data.component.css']
})
export class AddExpectedDataComponent implements OnInit, OnDestroy {

  trajectoriesList;
  constructor(public dialog2: MatDialog, public dialog3: MatDialog,
    public dialogRef1: MatDialogRef<AddExpectedDataComponent>,private cdrpService: CdrpService,
    @Inject(MAT_DIALOG_DATA) public data: AddData) {
    }

  previousDialog(): void {
    this.dialogRef1.close();
  }

  onClose() {
    this.dialogRef1.close('closeAll');
  }

  ngOnInit() {
    console.log('in add expected data ');
    this.trajectoriesList = this.cdrpService.getIdrpData();
    console.log(this.trajectoriesList);
    Array.from(document.querySelectorAll('.cdk-overlay-container .cdk-global-overlay-wrapper'))
    .forEach((node, index, array) => (index !== array.length - 1) ? (<HTMLElement> node).style.display = 'none' : true);
  }

  ngOnDestroy() {
   Array.from(document.querySelectorAll('.cdk-overlay-container .cdk-global-overlay-wrapper'))
    .forEach((node) => (<HTMLElement> node).style.display = '' );
  }

  createDataTrajectoryDialog() {
    const dialogRef2 = this.dialog2.open(CreateDataTrajectoryComponent, {
      width: '800px',
      height: '370px',
      data: 'here i am'
    });

    dialogRef2.beforeClosed().subscribe(result => {
      console.log('in parent' + result);
      if (result === 'closeAll') {
        this.dialogRef1.close('closeAll');
      }
   });

  }

  duplicateTrajectoryDialog(trajectoryName) {
    const dialogRef3 = this.dialog3.open(CreateDuplicateTrajectoryComponent, {
      width: '800px',
      height: '370px',
      data: trajectoryName
    });

    dialogRef3.beforeClosed().subscribe(result => {
      console.log('in parent' + result);
      if (result === 'closeAll') {
        this.dialogRef1.close('closeAll');
      }
   });
  }

}
