import { Component, OnInit, OnDestroy } from '@angular/core';
import { runInThisContext } from 'vm';
import { CdrpService } from '../cdrp.service';
import { AddExpectedDataComponent } from '../add-expected-data/add-expected-data.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MapExpectedDataFormsComponent } from '../map-expected-data-forms/map-expected-data-forms.component';
import { FormData} from '../Study';

@Component({
  selector: 'app-expected-data',
  templateUrl: './expected-data.component.html',
  styleUrls: ['./expected-data.component.css']
})
export class ExpectedDataComponent implements OnInit, OnDestroy {

  formData:FormData[]=[
    {
      "expectedDataForm":"Vital Sign 1",
      "expectedDataCategory":["option1","option2","option3","option4","option5"]
    },
    {
      "expectedDataForm":"Vital Sign 2",
      "expectedDataCategory":["option1","option2","option3","option4","option5"]
    },
    {
      "expectedDataForm":"Informed Consent",
      "expectedDataCategory":["option1","option2","option3","option4","option5"]
    },
    {
      "expectedDataForm":"Physical Examination",
      "expectedDataCategory":["option1","option2","option3","option4","option5"]
    },
    {
      "expectedDataForm":"Dosing Related to Pharmacokin",
      "expectedDataCategory":["option1","option2","option3","option4","option5"]
    },
    {
      "expectedDataForm":"Dosing Related to Pharmacokin",
      "expectedDataCategory":["option1","option2","option3","option4"]
    },
    {
      "expectedDataForm":"Imaging",
      "expectedDataCategory":["option1","option2","option3","option4"]
    }
  ]

  studyID: string;
  constructor(private cdrpService: CdrpService,public dialog: MatDialog) { }

  ngOnInit() {
   this.studyID = this.cdrpService.id;  
  // Array.from(document.querySelectorAll(".cdk-overlay-container .cdk-global-overlay-wrapper")) .forEach((node, index, array) => (index !== array.length - 1) ? (<HTMLElement> node).style.display = "none" : true);
  }

  ngOnDestroy()
  {
    //Array.from(document.querySelectorAll(".cdk-overlay-container .cdk-global-overlay-wrapper")) .forEach((node) =>(<HTMLElement> node).style.display = "" );
  }

  openMapExpectedDataDialog(): void {
    const dialogRef = this.dialog.open(MapExpectedDataFormsComponent, {
      width: '500px',
      height:'500px',
      data: this.formData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      var a = result;
    });
  }


}
