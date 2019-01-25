import { Component, OnInit, Inject } from '@angular/core';
import { dataTrajectory } from '../tableData';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-editdatacategory',
  templateUrl: './editdatacategory.component.html',
  styleUrls: ['./editdatacategory.component.css']
})
export class EditdatacategoryComponent implements OnInit {
  editField: string;
  updateddt: dataTrajectory;
  constructor(public dialogRef1: MatDialogRef< EditdatacategoryComponent>, @Inject(MAT_DIALOG_DATA) public data: dataTrajectory) {
    this.updateddt = this.data;
   }

 updateList(property: string, event: any) {
    const editField = event.target.textContent;
   // this.updateddt[property] = editField;
   // console.log(this.updateddt);
  }
  changeValue( property: string, event: any) {
    this.editField = event.target.textContent;
    // console.log(event.target.textContent);
  }
  save() {
   // console.log(this.updateddt);
    this.dialogRef1.close();
  }
  ngOnInit() {
  }

}
