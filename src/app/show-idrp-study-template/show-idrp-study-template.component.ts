import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { checks} from '../tableData';
import { MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { CdrpService } from '../cdrp.service';
@Component({
  selector: 'app-show-idrp-study-template',
  templateUrl: './show-idrp-study-template.component.html',
  styleUrls: ['./show-idrp-study-template.component.css']
})
export class ShowIdrpStudyTemplateComponent implements OnInit, OnDestroy {

  datacategoriesoptions = [];
  purposeoptions = [];
  rolesoptions = [];
  methodoptions = [];
  frequencyoptions = [] ;
  displayedColumns: string[] = ['select', 'expectedDataCategory', 'purpose', 'description', 'role', 'method', 'frequency'];
  selection = new SelectionModel<{}>(true, []);
  dataSource = new MatTableDataSource<checks>(this.data.fields);
  idrpCheckList = [];
  selectedIdrpCheck;
  checkList = [];
  constructor(public dialogRef2: MatDialogRef<ShowIdrpStudyTemplateComponent>, private cdrpService: CdrpService,
    @Inject(MAT_DIALOG_DATA) public data) { }

    ngOnInit() {
      console.log(this.data);
      console.log(this.data.fields);
      console.log(this.data.fields[0].category);
      console.log(this.data.template);
      this.datacategoriesoptions = ['Vital Sign', 'Date of Visit'];
      this.purposeoptions = ['Data Quality', 'Data Check'];
      this.rolesoptions = ['CDR', 'Remote Monitor'];
      this.methodoptions = ['Analytics', 'Manual'];
      this.frequencyoptions = ['Monthly', 'Weekly'];
      Array.from(document.querySelectorAll('.cdk-overlay-container .cdk-global-overlay-wrapper'))
      .forEach((node, index, array) => (index !== array.length - 1) ? (<HTMLElement> node).style.display = 'none' : true);
    }

    ngOnDestroy() {
      Array.from(document.querySelectorAll('.cdk-overlay-container .cdk-global-overlay-wrapper'))
      .forEach((node) => (<HTMLElement> node).style.display = '' );
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

  selectedRows(row, idx) {
    console.log(this.selection.isSelected(row));
    if (!this.selection.isSelected(row)) {
      console.log(row);
      this.selectedIdrpCheck = {
        purpose: row.purpose,
        description: row.description,
        visit: '',
        role: row.role,
        method: row.method,
        frequency: row.frequency,
        owner: row.owner,
        checkName: row.checkName,
        queryText: '',
        source: this.data.template.templatename,
        createdBy: row.owner,
        createdDate: '',
        lastUpdatedDate: '',
        expectedDataCategoryId: this.cdrpService.getSelectedExpectedCategoryId()
      };

      this.idrpCheckList.push(this.selectedIdrpCheck);
      this.checkList.push(idx);
    } else {
      console.log('deselect');
      const i = this.checkList.indexOf(idx);
      console.log(i);
      if ( i >= -1)  {
        this.idrpCheckList.splice(i, 1);
        this.checkList.splice(i, 1 );
       }
  }
  console.log(this.idrpCheckList);
  console.log(this.checkList);
}

  selectedAllRows() {

    if (!this.isAllSelected()) {
    for (let q = 0; q < this.dataSource.data.length ; q++) {
      const row = this.dataSource.data[q];
      const i = this.checkList.indexOf(q);
      console.log(i);
      if (i <= -1 ) {
      console.log('select All ');
      this.selectedIdrpCheck = {
        purpose: row.purpose,
        description: row.description,
        visit: '',
        role: row.role,
        method: row.method,
        frequency: row.frequency,
        owner: row.owner,
        checkName: row.checkName,
        queryText: '',
        source: this.data.template.templatename,
        createdBy: row.owner,
        createdDate: '',
        lastUpdatedDate: '',
        expectedDataCategoryId: this.cdrpService.getSelectedExpectedCategoryId()
      };

      this.idrpCheckList.push(this.selectedIdrpCheck);
      this.checkList.push(q);
    }
    }
   } else {
        console.log('deselect of all');
        this.checkList = [];
        this.idrpCheckList = [];
      }

      console.log(this.idrpCheckList);
  }


  onClose() {
    this.dialogRef2.close('closeAll');
  }

  previousDialog() {
    this.dialogRef2.close('closeDialogBox');
  }

  addDialog() {
    console.log('in add checks');
    this.cdrpService.saveIdrpChecks(this.idrpCheckList).subscribe((res) => {
      console.log(res.text()); } );
    this.dialogRef2.close('addedChecks');
  }
}
