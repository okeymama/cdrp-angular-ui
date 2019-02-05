import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CdrpService } from '../cdrp.service';

@Component({
  selector: 'app-buisnessrule',
  templateUrl: './buisnessrule.component.html',
  styleUrls: ['./buisnessrule.component.css']
})
export class BuisnessruleComponent implements OnInit {
  expectedDataCategory: any;
  constructor(public dialogRef: MatDialogRef<BuisnessruleComponent>, public cdrpservice: CdrpService) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.expectedDataCategory = this.cdrpservice.selectedExpectedDatacategory.expectedDataCategoryName;
  }

}
