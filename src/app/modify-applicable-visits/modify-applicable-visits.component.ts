import { Component, OnInit , Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { NgModel } from '@angular/forms';
import { dataTrajectoryForms, applicableVisit, visitSource} from '../tableData';
import {MatSnackBar} from '@angular/material';
import { AddNewVisitComponent } from '../add-new-visit/add-new-visit.component';


@Component({
  selector: 'app-modify-applicable-visits',
  templateUrl: './modify-applicable-visits.component.html',
  styleUrls: ['./modify-applicable-visits.component.css']
})
export class ModifyApplicableVisitsComponent implements OnInit {

  masterData: visitSource[] = [
    {
    raveEdc: ['Cycle 1 Day 1', 'Cycle 1 Day 2', 'Cycle 1 Day 3', 'Cycle 1 Day 4', 'Cycle 1 Day 5',
    'Cycle 1 Day 6', 'Cycle 1 Day 7', 'Cycle 1 Day 8', 'Cycle 1 Day 9', 'Cycle 1 Day 10',
    'Cycle 2 Day 1', 'Cycle 2 Day 2', 'Cycle 2 Day 3', 'Cycle 2 Day 4', 'Cycle 2 Day 5',
    'Cycle 2 Day 6', 'Cycle 2 Day 7', 'Cycle 2 Day 8', 'Cycle 2 Day 9', 'Cycle 2 Day 10',
    'Cycle 3 Day 1', 'Cycle 3 Day 2', 'Cycle 3 Day 3', 'Cycle 3 Day 4', 'Cycle 3 Day 5',
    'Cycle 3 Day 6', 'Cycle 3 Day 7', 'Cycle 3 Day 8', 'Cycle 3 Day 9', 'Cycle 3 Day 10',
    'Cycle 4 Day 1', 'Cycle 4 Day 2', 'Cycle 4 Day 3', 'Cycle 4 Day 4', 'Cycle 4 Day 5',
    'Cycle 4 Day 6', 'Cycle 4 Day 7', 'Cycle 4 Day 8', 'Cycle 4 Day 9', 'Cycle 4 Day 10',
    'Cycle 5 Day 1', 'Cycle 5 Day 2', 'Cycle 5 Day 3', 'Cycle 5 Day 4', 'Cycle 5 Day 5',
    'Cycle 5 Day 6', 'Cycle 5 Day 7', 'Cycle 5 Day 8', 'Cycle 5 Day 9', 'Cycle 5 Day 10',
    'Cycle 6 Day 1', 'Cycle 6 Day 2', 'Cycle 6 Day 3', 'Cycle 6 Day 4', 'Cycle 6 Day 5',
    'Cycle 6 Day 6', 'Cycle 6 Day 7', 'Cycle 6 Day 8', 'Cycle 6 Day 9', 'Cycle 6 Day 10',
    'Cycle 7 Day 1', 'Cycle 7 Day 2', 'Cycle 7 Day 3', 'Cycle 7 Day 4', 'Cycle 7 Day 5',
    'Cycle 7 Day 6', 'Cycle 7 Day 7', 'Cycle 7 Day 8', 'Cycle 7 Day 9', 'Cycle 7 Day 10',
    'Cycle 8 Day 1', 'Cycle 8 Day 2', 'Cycle 8 Day 3', 'Cycle 8 Day 4', 'Cycle 8 Day 5',
    'Cycle 8 Day 6', 'Cycle 8 Day 7', 'Cycle 8 Day 8', 'Cycle 8 Day 9', 'Cycle 8 Day 10',
    'Cycle 9 Day 1', 'Cycle 9 Day 2', 'Cycle 9 Day 3', 'Cycle 9 Day 4', 'Cycle 9 Day 5',
    'Cycle 9 Day 6', 'Cycle 9 Day 7', 'Cycle 9 Day 8', 'Cycle 9 Day 9', 'Cycle 9 Day 10',
    'Cycle 10 Day 1', 'Cycle 10 Day 2', 'Cycle 10 Day 3', 'Cycle 10 Day 4', 'Cycle 10 Day 5',
    'Cycle 10 Day 6', 'Cycle 10 Day 7', 'Cycle 10 Day 8', 'Cycle 10 Day 9', 'Cycle 10 Day 10', ],
     mdr: ['Cycle 1 Day 1', 'Cycle 1 Day 2', 'Cycle 1 Day 3', 'Cycle 1 Day 4', 'Cycle 1 Day 5', 'Cycle 1 Day 6',
     'Cycle 2 Day 1', 'Cycle 2 Day 2', 'Cycle 2 Day 3', 'Cycle 2 Day 4', 'Cycle 2 Day 5', 'Cycle 2 Day 6',
     'Cycle 3 Day 1', 'Cycle 3 Day 2', 'Cycle 3 Day 3', 'Cycle 3 Day 4', 'Cycle 3 Day 5', 'Cycle 3 Day 6']

    }
  ];

  selection = new SelectionModel<{}>(true, []);
  selection1 = new SelectionModel<{}>(true, []);
  dataSource = new MatTableDataSource(this.data.listOfVisits.raveEdc);
  dataSource1 = new MatTableDataSource(this.data.listOfVisits.mdr);
  finalEdr = [];
  finalMdr = [];
  oldEdrList = Object.assign([], this.data.listOfVisits.raveEdc);
  oldMdrList = Object.assign([], this.data.listOfVisits.mdr);
  arr1 = [];
  arr2 = [];
  arr3 = [];
  arr4 = [];
  selectSource = '';
  closeValue: any;
  count = 0;

  constructor(public dialogRef: MatDialogRef<ModifyApplicableVisitsComponent>, public snackBar: MatSnackBar, public dialog2: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.arrangeVisits();
    this.dataSource1.data.forEach(row => this.selection1.select(row));
    this.dataSource.data.forEach(row => this.selection.select(row));
    this.finalEdr = Object.assign([], this.data.listOfVisits.raveEdc);
    this.finalMdr = Object.assign([], this.data.listOfVisits.mdr);
 }

 arrangeVisits() {
  console.log(this.data.listOfVisits.raveEdc);
  console.log(this.data.id);
  const l = this.data.listOfVisits.raveEdc.length;
  console.log('len  ' + l);
  for (let c = 0; c < l && c <= 9 ; c++) {
      this.arr1[c] = this.data.listOfVisits.raveEdc[c];
  }
  if (l > 9) {
    for (let c = 0, p = 10; c <= 9 && p < l ; c++, p++) {
      this.arr2[c] = this.data.listOfVisits.raveEdc[p];
    }
  }
  if (l > 20) {
    for (let c = 0, p = 20; c <= 9 && p < l ; c++, p++) {
      this.arr3[c] = this.data.listOfVisits.raveEdc[p];
    }
  }
  if (l > 30) {
    for (let c = 0, p = 30; c <= 9 && p < l ; c++, p++) {
      this.arr4[c] = this.data.listOfVisits.raveEdc[p];
    }
  }
  console.log('arr1' + this.arr1);
  console.log('arr2' + this.arr2);
  console.log('arr3' + this.arr3);
  console.log('arr3' + this.arr4);
 }


  onNoClick(): void {
    this.data.listOfVisits.raveEdc = this.oldEdrList;
    this.data.listOfVisits.mdr = this.oldMdrList;
    this.dialogRef.close('noChanges');
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  isAllSelected1() {
    const numSelected = this.selection1.selected.length;
    const numRows = this.dataSource1.data.length;
    return numSelected === numRows;

  }

  masterToggle1() {
    this.isAllSelected1() ?
        this.selection1.clear() :
        this.dataSource1.data.forEach(row => this.selection1.select(row));
  }

  addVisits() {

    const dialogRef2 = this.dialog2.open(AddNewVisitComponent, {
      width: '810px',
      height: '580px',
      data: {masterData: this.masterData, mappedVisits: this.data.listOfVisits}
      });

      dialogRef2.beforeClosed().subscribe(result => {
      if (result !== 'closeAll') {
      this.data.listOfVisits.raveEdc = result.raveEdc;
      this.data.listOfVisits.mdr = result.mdr;

      this.arrangeVisits();
      }
      });

  }

  addVisits1(formValue) {

    if (this.selectSource === '') {
      this.snackBar.open('Select the Source to add a new visit', 'close', {
        duration: 3000,
      });
    } else if ( formValue === '') {
      this.snackBar.open('Add the new visit', 'close', {
        duration: 3000,
      });
    } else {
      const dialogRef2 = this.dialog2.open(AddNewVisitComponent, {
        width: '810px',
        height: '580px',
        data: {masterData: this.masterData, mappedVisits: this.data.listOfVisits}
        });

        dialogRef2.beforeClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
        this.data.listOfVisits.raveEdc = result.raveEdc;
        this.data.listOfVisits.mdr = result.mdr;
        this.arrangeVisits();
        });
    }
  }


  EdrSelectAll() {
    console.log('final select all');
    console.log(this.isAllSelected());
    if (!this.isAllSelected()) {
      this.finalEdr = Object.assign([], this.data.listOfVisits.raveEdc);
    } else {
      this.finalEdr = [];
    }
    console.log(this.finalEdr);

  }

  EdrSelect(item) {
    console.log(item);
    console.log(this.selection.isSelected(item));
    console.log(this.selection.hasValue() + '  ' + !this.isAllSelected() );
    const i = this.finalEdr.indexOf(item);
    if ( i > -1 && this.selection.isSelected(item)) {
      console.log('Present i = ' + i + 'sel val = ' + this.selection.isSelected(item));
      this.finalEdr.splice(i , 1);
    } else if (i <= -1 && !this.selection.isSelected(item)) {
      console.log('NOT Present i = ' + i + 'sel val = ' + this.selection.isSelected(item));
      this.finalEdr.push(item);
    }
    console.log(this.finalEdr);
  }

  MdrSelectAll() {

    console.log(!this.isAllSelected1());
    if (!this.isAllSelected1()) {
      this.finalMdr = Object.assign([], this.data.listOfVisits.mdr);
    } else {
      this.finalMdr = [];
    }
  }

  MdrSelect(item) {

    console.log(item);
    console.log(this.selection1.isSelected(item));
    console.log(this.selection1.hasValue() + '  ' + !this.isAllSelected1() );
    const i = this.finalMdr.indexOf(item);
    if ( i > -1 && this.selection1.isSelected(item)) {
      console.log('Present i = ' + i + 'sel val = ' + this.selection1.isSelected(item));
      this.finalMdr.splice(i , 1);
    } else if (i <= -1 && !this.selection1.isSelected(item)) {
      console.log('NOT Present i = ' + i + 'sel val = ' + this.selection1.isSelected(item));
      this.finalMdr.push(item);
    }
    console.log(this.finalMdr);
  }


  sourceSelected(s) {
    this.selectSource = s;
  }

  onSave() {
    if (this.finalEdr.length <= 0 && this.finalMdr.length <= 0 ) {
      this.dialogRef.close('noChanges');

    } else {
    this.data.listOfVisits.raveEdc = this.finalEdr;
    this.data.listOfVisits.mdr = this.finalMdr;
    console.log(this.data.listOfVisits.raveEdc);
    console.log(this.data.listOfVisits.mdr);
    this.dialogRef.close(this.data.listOfVisits);
    }
  }

}
