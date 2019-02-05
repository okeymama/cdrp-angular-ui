import { Component, OnInit, Inject } from '@angular/core';
import { dataTrajectory } from '../tableData';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CdrpService } from '../cdrp.service';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-editdatacategory',
  templateUrl: './editdatacategory.component.html',
  styleUrls: ['./editdatacategory.component.css']
})
export class EditdatacategoryComponent implements OnInit {
  editField: string;
  updateddt: dataTrajectory;
  updatedData: any = {
    'expectedDataCategoryName': this.cdrpservice.selectedExpectedDatacategory.expectedDataCategoryName,
    'criticalData': this.cdrpservice.selectedExpectedDatacategory.criticalData,
    'dataTransferFrequency': this.cdrpservice.selectedExpectedDatacategory.dataTransferFrequency,
    'source': this.cdrpservice.selectedExpectedDatacategory.source,
    'comment': this.cdrpservice.selectedExpectedDatacategory.comment
  };
  constructor(public cdrpservice: CdrpService, public dialogRef1: MatDialogRef< EditdatacategoryComponent>) {
    // this.updateddt = this.data;
   }

   close() {
     this.updatedData.criticalData =  this.cdrpservice.selectedExpectedDatacategory.criticalData;
     this.updatedData.expectedDataCategoryName = this.cdrpservice.selectedExpectedDatacategory.expectedDataCategoryName;
     this.updatedData.source = this.cdrpservice.selectedExpectedDatacategory.source;
     this.updatedData.dataTransferFrequency = this.cdrpservice.selectedExpectedDatacategory.dataTransferFrequency;
     this.updatedData.comment = this.cdrpservice.selectedExpectedDatacategory.comment;
    this.dialogRef1.close(this.updatedData);
   }
 updateList(property: string, event: any) {
    const editField = event.target.textContent;
  // this.updatedData[property] = editField;
   this.updatedData[property] = editField;
    // console.log(this.updatedData);
  }
  changeValue( property: string, event: any) {
    this.editField = event.target.textContent;
    // console.log(event.target.textContent);
  }
  save() {
   // console.log(this.updateddt);
   this.cdrpservice.selectedExpectedDatacategory.criticalData = this.updatedData.criticalData;
   this.cdrpservice.selectedExpectedDatacategory.source = this.updatedData.source;
   this.cdrpservice.selectedExpectedDatacategory.expectedDataCategoryName = this.updatedData.expectedDataCategoryName;
   this.cdrpservice.selectedExpectedDatacategory.dataTransferFrequency = this.updatedData.dataTransferFrequency;
   this.cdrpservice.selectedExpectedDatacategory.comment = this.updatedData.comment;
  // console.log(this.cdrpservice.selectedExpectedDatacategory);
   this.cdrpservice.updateexpectedDataCategory(this.cdrpservice.selectedExpectedDatacategory).subscribe((res: Response) => {
    console.log(res.text());
  });
  this.dialogRef1.close(this.updatedData);
  }
  ngOnInit() {
    this.updatedData.source = this.cdrpservice.selectedExpectedDatacategory.source;
    this.updatedData.criticalData = this.cdrpservice.selectedExpectedDatacategory.criticalData;
    this.updatedData.dataTransferFrequency = this.cdrpservice.selectedExpectedDatacategory.dataTransferFrequency;
    this.updatedData.expectedDataCategoryName = this.cdrpservice.selectedExpectedDatacategory.expectedDataCategoryName;
    this.updatedData.comment = this.cdrpservice.selectedExpectedDatacategory.comment;
  }

}
