import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { checks} from '../tableData';
import { MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-show-idrp-template',
  templateUrl: './show-idrp-template.component.html',
  styleUrls: ['./show-idrp-template.component.css']
})
export class ShowIdrpTemplateComponent implements OnInit, OnDestroy {
  datacategoriesoptions = [];
  purposeoptions = [];
  rolesoptions = [];
  methodoptions = [];
  frequencyoptions = [] ;
  displayedColumns: string[] = ['select','expectedDataCategory','purpose','description','role','method','frequency'];
  selection = new SelectionModel<{}>(true, []);
  dataSource = new MatTableDataSource<checks>(this.data.fields);
  constructor(public dialogRef2: MatDialogRef<ShowIdrpTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

    ngOnInit()
    {
      console.log(this.data);
      console.log(this.data.fields);
      console.log(this.data.fields[0].category);
      this.datacategoriesoptions=['Vital Sign','Date of Visit'];
      this.purposeoptions=['Data Quality','Data Check'];
      this.rolesoptions=['CDR','Remote Monitor'];
      this.methodoptions=['Analytics','Manual'];
      this.frequencyoptions=['Monthly','Weekly'];
      Array.from(document.querySelectorAll(".cdk-overlay-container .cdk-global-overlay-wrapper")) .forEach((node, index, array) => (index !== array.length - 1) ? (<HTMLElement> node).style.display = "none" : true);
    }
  
    ngOnDestroy()
    {
      Array.from(document.querySelectorAll(".cdk-overlay-container .cdk-global-overlay-wrapper")) .forEach((node) =>(<HTMLElement> node).style.display = "" );
    }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(){
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));

  }

  onClose() {
    this.dialogRef2.close('closeAll');
  }

  previousDialog() {
    this.dialogRef2.close('closeDialogBox');
  }

  addDialog() {
    this.dialogRef2.close('addedChecks');
  }
}
