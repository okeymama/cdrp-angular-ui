import { Component, OnInit,Inject , OnDestroy, EventEmitter, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormData,AddData} from '../Study';
import { CreateDataTrajectoryComponent } from '../create-data-trajectory/create-data-trajectory.component';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-add-expected-data',
  templateUrl: './add-expected-data.component.html',
  styleUrls: ['./add-expected-data.component.css']
})
export class AddExpectedDataComponent implements OnInit, OnDestroy {

  constructor(public dialog2: MatDialog,
    public dialogRef1: MatDialogRef<AddExpectedDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data:AddData) {
    }

  previousDialog(): void {
    this.dialogRef1.close();
  }

  onClose()
  {
    this.dialogRef1.close('closeAll');
  }

  ngOnInit() {
    console.log("in add expected data ");
    Array.from(document.querySelectorAll(".cdk-overlay-container .cdk-global-overlay-wrapper")) .forEach((node, index, array) => (index !== array.length - 1) ? (<HTMLElement> node).style.display = "none" : true);
  }

  ngOnDestroy()
  {
   Array.from(document.querySelectorAll(".cdk-overlay-container .cdk-global-overlay-wrapper")) .forEach((node) =>(<HTMLElement> node).style.display = "" );
  }

  createDataTrajectoryDialog()
  {
    const dialogRef2 = this.dialog2.open(CreateDataTrajectoryComponent, {
      width: '800px',
      height:'370px',
      data: "here i am"
    });

    dialogRef2.beforeClosed().subscribe(result=>{
      console.log("in parent"+result);
      if(result === 'closeAll')
      {
        this.dialogRef1.close('closeAll');
      }
   })

  }

}
