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

  listOfForms:string[]=[
    "Vital Sign 1", "Vital Sign 2", "Informed Consent","Physical Examination","Dosing Related to Pharmacokin","Imaging"
  ];

  displayedColumns: string[] = ['select'];
  selection = new SelectionModel<string>(true, []);
  dataSource = new MatTableDataSource(this.listOfForms);

  constructor(public dialogRef: MatDialogRef<AddFormsComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.dataSource.filterPredicate = function(data,filter):boolean{
      return data.toLowerCase().includes(filter);
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit()
  {
    console.log("in submit");
  }

  searchForms(searchValue)
  {
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

}
