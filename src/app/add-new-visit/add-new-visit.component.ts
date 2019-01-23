import { Component, OnInit , OnDestroy, Inject , ViewChild , AfterViewInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatTableDataSource, MatSortable, MatPaginator} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { NgModel } from '@angular/forms';
import { dataTrajectoryForms, applicableVisit, visitSource} from '../tableData';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-new-visit',
  templateUrl: './add-new-visit.component.html',
  styleUrls: ['./add-new-visit.component.css']
})
export class AddNewVisitComponent implements OnInit , OnDestroy , AfterViewInit {

  constructor(public dialogRef2: MatDialogRef<AddNewVisitComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  displayedColumns: string[] = ['select1', 'select2', 'select3'];
  selection = new SelectionModel<{}>(true, []);
  selection1 = new SelectionModel<{}>(true, []);
  dataSource = new MatTableDataSource<dataTrajectoryForms>(this.data.masterData[0].raveEdc);
  dataSource1 = new MatTableDataSource(this.data.masterData[0].mdr);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  arr1 = [];
  arr2 = [];
  arr3 = [];
  myModel = true;
  newVisitsEdc = [];
  newVisitsMdr = [];
  removeVisitsMdr = [];
  removeVisitsEdc = [];
  checkSelect = '';
  checkSelect1 = '';
  checkSelect2 = '';

  ngOnInit() {
    Array.from(document.querySelectorAll('.cdk-overlay-container .cdk-global-overlay-wrapper'))
    .forEach((node, index, array) => (index !== array.length - 1) ? (<HTMLElement> node).style.display = 'none' : true);
    console.log(this.data.masterData[0].raveEdc);
    console.log(this.data.mappedVisits);
    const l = this.data.masterData[0].raveEdc.length;
    console.log('len  ' + l);
    console.log(this.newVisitsMdr);
    for (let c = 0; c < l && c <= 29 ; c++) {
        this.arr1[c] = this.data.masterData[0].raveEdc[c];
    }
    if (l > 9) {
      for (let c = 0, p = 30; c <= 29 && p < l ; c++, p++) {
        this.arr2[c] = this.data.masterData[0].raveEdc[p];
      }
    }
    if (l > 20) {
      for (let c = 0, p = 60; c <= 29 && p < l ; c++, p++) {
        this.arr3[c] = this.data.masterData[0].raveEdc[p];
      }
    }
    console.log('arr1' + this.arr1);
    console.log('arr2' + this.arr2);
    console.log('arr3' + this.arr3);
  }

  ngAfterViewInit() {
    this.checkSelect2 = 'work';
  }

  defaultSelectEdc(selectedItem): boolean {
    const i = this.data.mappedVisits.raveEdc.indexOf(selectedItem);
    if (i > -1) {
      return true;
    } else {
      return false;
    }

  }

  defaultSelectMdr(selectedItem): boolean {
    const i = this.data.mappedVisits.mdr.indexOf(selectedItem);
    if (i > -1) {
      return true;
    } else {
      return false;
    }
  }

  addedVisitsEdc(item) {
   // console.log(item);
    const j = this.data.mappedVisits.raveEdc.indexOf(item);
    const i = this.newVisitsEdc.indexOf(item);
    let k = 0;
    if (this.removeVisitsEdc.length > 0) {
     k = this.removeVisitsEdc.indexOf(item);
    } else {
     k = -1;
    }
    if (this.checkSelect === '' || this.checkSelect !== item) {
      this.checkSelect = item;
      if (!(i > -1)) {
        if ((j > -1)) {
          if ((k > -1)) {
            this.removeVisitsEdc.splice(k, 1);
          } else {
            this.removeVisitsEdc.push(item);
          }
        } else {
          this.newVisitsEdc.push(item);
        }
      } else {
        if (k > -1 && i > -1) {
          this.removeVisitsEdc.splice(k);
          } else {
         //   console.log(this.newVisitsEdc);
          //  console.log('i = ' + i + ' ,k =' + k);
            this.newVisitsEdc.splice(i, 1);
          //  console.log(this.newVisitsEdc);
          }
      }
    } else if (this.checkSelect === item) {
      this.checkSelect = '';
      if (i > -1) {
        this.newVisitsEdc.splice(i, 1);
      } else {
        if ((j > -1)) {
          if  (!(k > -1)) {
            this.removeVisitsEdc.push(item);
          } else {
         // console.log('val j = +' + j + ', ' + k);
          this.removeVisitsEdc.splice(k, 1);
          }
        } else  {
          this.newVisitsEdc.push(item);
        }
      }
      }
   // console.log(this.newVisitsEdc);
   // console.log(this.removeVisitsEdc);
  }

  addedVisitsMdr(item) {
   // console.log(item);
   // console.log(this.checkSelect1);
    const j = this.data.mappedVisits.mdr.indexOf(item);
    const i = this.newVisitsMdr.indexOf(item);
    let k = 0;
    if (this.removeVisitsMdr.length > 0) {
     k = this.removeVisitsMdr.indexOf(item);
    } else {
     k = -1;
    }
   // console.log('i =  ' + i + ', j = ' + j + ', k = ' + k);
    if (this.checkSelect1 === '' || this.checkSelect1 !== item) {
      this.checkSelect1 = item;
      if (!(i > -1)) {
        if ((j > -1)) {
          if ((k > -1)) {
            this.removeVisitsMdr.splice(k, 1);
          } else {
            this.removeVisitsMdr.push(item);
          }
        } else {
        this.newVisitsMdr.push(item);
        }
      } else {
        if (k > -1 && i > -1) {
        this.removeVisitsMdr.splice(k);
        } else {
         // console.log(this.newVisitsMdr);
         // console.log('i = ' + i + ' ,k =' + k);
          this.newVisitsMdr.splice(i, 1);
         // console.log(this.newVisitsMdr);
        }
      }
    } else if (this.checkSelect1 === item) {
      this.checkSelect1 = '';
      if (i > -1) {
        this.newVisitsMdr.splice(i, 1);
      } else {
        if ((j > -1)) {
          if  (!(k > -1)) {
            this.removeVisitsMdr.push(item);
          } else {
          // console.log('val j = +' + j + ', ' + k);
          this.removeVisitsMdr.splice(k, 1);
          }
        } else  {
          this.newVisitsMdr.push(item);
        }
      }
    }
    // console.log(this.newVisitsMdr);
    // console.log(this.removeVisitsMdr);
  }

  ngOnDestroy() {
    Array.from(document.querySelectorAll('.cdk-overlay-container .cdk-global-overlay-wrapper'))
    .forEach((node, index, array) => (index !== array.length - 2) ? (<HTMLElement> node).style.display = '' : true);
  }

  onClose() {
    this.dialogRef2.close('closeAll');
  }

  onSave() {
    console.log(this.newVisitsMdr);
    console.log(this.removeVisitsMdr);
    for (let c = 0; c < this.removeVisitsMdr.length; c++) {
      const i = this.data.mappedVisits.mdr.indexOf(this.removeVisitsMdr[c]);
      if (i > -1) {
        this.data.mappedVisits.mdr.splice(i, 1);
      }
     }
    for (let c = 0; c < this.newVisitsMdr.length; c++) {
        this.data.mappedVisits.mdr.push(this.newVisitsMdr[c]);
     }
     console.log(this.data.mappedVisits.mdr);
     console.log('--------EDC----------');
     console.log(this.newVisitsEdc);
     console.log(this.removeVisitsEdc);
    for (let c = 0; c < this.removeVisitsEdc.length; c++) {
      const i = this.data.mappedVisits.raveEdc.indexOf(this.removeVisitsEdc[c]);
      if (i > -1) {
        this.data.mappedVisits.raveEdc.splice(i, 1);
      }
     }
    for (let c = 0; c < this.newVisitsEdc.length; c++) {
        this.data.mappedVisits.raveEdc.push(this.newVisitsEdc[c]);
     }
     console.log(this.data.mappedVisits.raveEdc);

    this.dialogRef2.close(this.data.mappedVisits);
  }

}
