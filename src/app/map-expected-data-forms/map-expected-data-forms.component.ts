import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormData, AddData} from '../Study';
import { AddExpectedDataComponent } from '../add-expected-data/add-expected-data.component';
import { CdrpService } from '../cdrp.service';

@Component({
  selector: 'app-map-expected-data-forms',
  templateUrl: './map-expected-data-forms.component.html',
  styleUrls: ['./map-expected-data-forms.component.css']
})
export class MapExpectedDataFormsComponent implements OnInit, OnDestroy {

  category: string[] = [];
  mappingList = [];
  addData: AddData[] = [
  {
    'dataTrajectoryName': 'Data Trajectory Name 001',
    'description': ['Lorem ipsum dolor sit amet', 'consectetur', 'Lorem ipsum dolor sit amet']
  },
  {
    'dataTrajectoryName': 'Data Trajectory Name 002',
    'description': ['Lorem ipsum dolor sit amet', 'consectetur', 'Lorem ipsum dolor sit amet']
  },
  {
    'dataTrajectoryName': 'Data Trajectory Name 003',
    'description': ['Lorem ipsum dolor sit amet', 'consectetur', 'Lorem ipsum dolor sit amet']
  }
  ];
  constructor(public dialog1: MatDialog,
    public dialogRef: MatDialogRef<MapExpectedDataFormsComponent>, private cdrpService: CdrpService,
    @Inject(MAT_DIALOG_DATA) public data: FormData[]) {
      for (let c = 0; c < data.length; c++) {
        this.category[c] = '';
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    Array.from(document.querySelectorAll('.cdk-overlay-container .cdk-global-overlay-wrapper'))
    .forEach((node, index, array) => (index !== array.length - 1) ? (<HTMLElement> node).style.display = 'none' : true);
  }

  ngOnDestroy() {
    Array.from(document.querySelectorAll('.cdk-overlay-container .cdk-global-overlay-wrapper'))
    .forEach((node) => (<HTMLElement> node).style.display = '' );
  }

  openAddExpectedDataDialog(): void {
    this.cdrpService.setSelectedMapping(this.mappingList);
    const dialogRef1 = this.dialog1.open(AddExpectedDataComponent, {
      width: '800px',
      height: '420px',
      data: this.addData
    });

    dialogRef1.beforeClosed().subscribe(result => {
      console.log('in parent' + result);
      if (result === 'closeAll') {
        this.dialogRef.close('closeAll');
      }
   });
  }

  onSelect(selectedValue: any, ind1) {
    this.category[ind1] = selectedValue;
    console.log(this.category);
    const i = this.mappingList.indexOf(selectedValue);
    if (i <= -1) {
      this.mappingList.push(selectedValue);
    }
    console.log(this.mappingList);
  }

}
