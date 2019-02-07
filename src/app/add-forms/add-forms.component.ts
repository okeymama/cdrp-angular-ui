import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-forms',
  templateUrl: './add-forms.component.html',
  styleUrls: ['./add-forms.component.css']
})


export class AddFormsComponent implements OnInit {

  listOfForms: string[] = [
    'Vital Sign', 'Viral Levels', 'Blood Sugar', 'System testing', 'Informed Consent',
    'Physical Examination', 'Dosing Related to Pharmacokin', 'Imaging', 'Immunity testing'
  ];
  selectedForms = [];

  displayedColumns: string[] = ['select'];
  selection = new SelectionModel<string>(true, []);
  dataSource = new MatTableDataSource(this.listOfForms);

  constructor(public dialogRef: MatDialogRef<AddFormsComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.dataSource.filterPredicate = function(data, filter): boolean {
      return data.toLowerCase().includes(filter);
    };
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    console.log('in submit');
  }

  searchForms(searchValue) {
    console.log(searchValue);
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

  addForms() {
    for (let x = 0; x < this.dataSource.data.length; x++) {
      const row = this.dataSource.data[x];
      console.log(row);
      this.selectedRowsCheck(row, x);
    }
    console.log(this.selectedForms);
    this.dialogRef.close(this.selectedForms);
  }

  selectedRowsCheck(row, idx) {
    console.log(this.selectedForms);
    console.log('selected Rows ' + idx);
    console.log(row);
    const i = this.selectedForms.indexOf(row);
    console.log('isSelected = ' + i);
    console.log(this.selection.isSelected(row) );
    if (this.selection.isSelected(row) && i <= -1) {
      this.selectedForms.push(row);
    } else if (!this.selection.isSelected(row)) {
      console.log('deselect');
     // const j = this.selectedForms.findIndex( record => record === row);
     // console.log(j);
      if (i >= 0) {
        console.log('deleting');
        this.selectedForms.splice(i, 1);
        console.log(this.selectedForms);
       }
    }
}

}
