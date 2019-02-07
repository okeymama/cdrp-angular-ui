import { Component, OnInit, OnDestroy } from '@angular/core';
import { runInThisContext } from 'vm';
import { CdrpService } from '../cdrp.service';
import { AddExpectedDataComponent } from '../add-expected-data/add-expected-data.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { MapExpectedDataFormsComponent } from '../map-expected-data-forms/map-expected-data-forms.component';
import { FormData } from '../Study';
import { IdrpPlanDetail } from '../ViewInterfaces';
import { AssignSubjectComponent } from '../assign-subject/assign-subject.component';
import { AddIdrpChecksComponent } from '../add-idrp-checks/add-idrp-checks.component';
import {MatSnackBar} from '@angular/material';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-expected-data',
  templateUrl: './expected-data.component.html',
  styleUrls: ['./expected-data.component.css']
})
export class ExpectedDataComponent implements OnInit, OnDestroy {

  formData: FormData[] = [
    {
      'expectedDataForm': 'Vital Sign 1',
      'expectedDataCategory': ['Vital Sign', 'Informed Consent', 'Physical Examination', 'Dosing Related to Pharmacokin', 'Imaging',
      'Blood Sugar', 'Viral Levels', 'System testing', 'Immunity testing']
    },
    {
      'expectedDataForm': 'Vital Sign 2',
      'expectedDataCategory': ['Vital Sign', 'Informed Consent', 'Physical Examination', 'Dosing Related to Pharmacokin', 'Imaging',
      'Blood Sugar', 'Viral Levels', 'System testing', 'Immunity testing']
    },
    {
      'expectedDataForm': 'Informed Consent',
      'expectedDataCategory': ['Vital Sign', 'Informed Consent', 'Physical Examination', 'Dosing Related to Pharmacokin', 'Imaging',
      'Blood Sugar', 'Viral Levels', 'System testing', 'Immunity testing']
    },
    {
      'expectedDataForm': 'Physical Examination',
      'expectedDataCategory': ['Vital Sign', 'Informed Consent', 'Physical Examination', 'Dosing Related to Pharmacokin', 'Imaging',
      'Blood Sugar', 'Viral Levels', 'System testing', 'Immunity testing']
    },
    {
      'expectedDataForm': 'Dosing Related to Pharmacokin',
      'expectedDataCategory': ['Vital Sign', 'Informed Consent', 'Physical Examination', 'Dosing Related to Pharmacokin', 'Imaging',
      'Blood Sugar', 'Viral Levels', 'System testing', 'Immunity testing']
    },
    {
      'expectedDataForm': 'Dosing Related to Pharmacokin',
      'expectedDataCategory': ['Vital Sign', 'Informed Consent', 'Physical Examination', 'Dosing Related to Pharmacokin', 'Imaging',
      'Blood Sugar', 'Viral Levels', 'System testing', 'Immunity testing']
    },
    {
      'expectedDataForm': 'Imaging',
      'expectedDataCategory': ['Vital Sign', 'Informed Consent', 'Physical Examination', 'Dosing Related to Pharmacokin', 'Imaging',
      'Blood Sugar', 'Viral Levels', 'System testing', 'Immunity testing']
    },
    {
      'expectedDataForm': 'Blood Sugar',
      'expectedDataCategory': ['Vital Sign', 'Informed Consent', 'Physical Examination', 'Dosing Related to Pharmacokin', 'Imaging',
      'Blood Sugar', 'Viral Levels', 'System testing', 'Immunity testing']
    },
    {
      'expectedDataForm': 'System testing',
      'expectedDataCategory': ['Vital Sign', 'Informed Consent', 'Physical Examination', 'Dosing Related to Pharmacokin', 'Imaging',
      'Blood Sugar', 'Viral Levels', 'System testing', 'Immunity testing']
    },
    {
      'expectedDataForm': 'Immunity testing',
      'expectedDataCategory': ['Vital Sign', 'Informed Consent', 'Physical Examination', 'Dosing Related to Pharmacokin', 'Imaging',
      'Blood Sugar', 'Viral Levels', 'System testing', 'Immunity testing']
    },
    {
      'expectedDataForm': 'Physical Examination',
      'expectedDataCategory': ['Vital Sign', 'Informed Consent', 'Physical Examination', 'Dosing Related to Pharmacokin', 'Imaging',
      'Blood Sugar', 'Viral Levels', 'System testing', 'Immunity testing']
    }
  ];

  studyID: string;
  category: string;
  idrpData: IdrpPlanDetail;
  constructor(private router: Router, private cdrpService: CdrpService, public dialog: MatDialog,
    public dialog1: MatDialog, public dialog2: MatDialog, public snackBar: MatSnackBar) { console.log('constructor called'); }

    assign(): void {
      console.log('Assign Subjects');
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '400px';
      dialogConfig.height = '100%' ;
      dialogConfig.maxHeight = '100%';
      dialogConfig.minHeight = '100%';
      const dialogRef = this.dialog1.open( AssignSubjectComponent, dialogConfig);

     }
  ngOnInit() {
   this.studyID = this.cdrpService.id;
   console.log('In OnInit of Expected Data');
   console.log(this.cdrpService.idrpPlanId);
   this.cdrpService.getIdrpPlanDetailById().subscribe((res: IdrpPlanDetail[]) => {
    this.idrpData = res[0];
    this.cdrpService.setIdrpData(res[0]);
    console.log(this.idrpData.studyId);
    console.log(res);
 });
 console.log('expected called');
  }

  ngOnDestroy() {}

  openMapExpectedDataDialog(): void {
    const dialogRef = this.dialog.open(MapExpectedDataFormsComponent, {
      width: '500px',
      height: '500px',
      data: this.formData
    });

    dialogRef.beforeClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  openAddIdrpChecksDialog(): void {
    this.category = this.cdrpService.getSelectedCategory();
    if (this.category === 'null') {
      this.snackBar.open('Select Expected Data Category to add IDRP checks', 'close', {
        duration: 3000,
      });
    } else {
     // this.router.navigate(['nav/next/idrptemplate']);
      const dialogRef2 = this.dialog2.open(AddIdrpChecksComponent, {
      width: '900px',
      height: '580px',
      data: this.category
      });

      dialogRef2.beforeClosed().subscribe(result => {
     //   this.router.navigate(['/nav/next']);
      console.log('The dialog was closed');
      console.log(result);
      if (result === 'addedChecks') {
       // this.cdrpService.refresh = true;
      }
      });
    }
  }

}
