import { Component, OnInit,Inject , OnDestroy} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormData,AddData} from '../Study';

@Component({
  selector: 'app-add-expected-data',
  templateUrl: './add-expected-data.component.html',
  styleUrls: ['./add-expected-data.component.css']
})
export class AddExpectedDataComponent implements OnInit, OnDestroy {

  constructor(
    public dialogRef1: MatDialogRef<AddExpectedDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data:AddData) {
    }

  onNoClick(): void {
    this.dialogRef1.close();
  }

  ngOnInit() {
    console.log("in add expected data ");
    Array.from(document.querySelectorAll(".cdk-overlay-container .cdk-global-overlay-wrapper")) .forEach((node, index, array) => (index !== array.length - 1) ? (<HTMLElement> node).style.display = "none" : true);
  }

  ngOnDestroy()
  {
   Array.from(document.querySelectorAll(".cdk-overlay-container .cdk-global-overlay-wrapper")) .forEach((node) =>(<HTMLElement> node).style.display = "" );
  }

}
