import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { checks, Idrpchecks} from '../tableData';
import { MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { CdrpService } from '../cdrp.service';

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
  checks: any;
  displayedColumns: string[] = ['select', 'expectedDataCategory', 'purpose', 'description', 'role', 'method', 'frequency'];
  selection = new SelectionModel<{}>(true, []);
  dataSource: any;
  idrpCheckList = [];
  selectedIdrpCheck;
  checkList = [];
  constructor(public dialogRef2: MatDialogRef<ShowIdrpTemplateComponent>, private cdrpService: CdrpService,
    @Inject(MAT_DIALOG_DATA) public data) { }

    ngOnInit() {
      console.log(this.cdrpService.idrpTemplate);
     this.checks = this.cdrpService.idrpTemplate[this.data.selecttemplate].idrpCheckCDTOs;
     this.dataSource = new MatTableDataSource<Idrpchecks>(this.checks);
      console.log('selected category id ' + this.cdrpService.getSelectedExpectedCategoryId());
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
        purpose: row.purposeC,
        description: row.descriptionC,
        visit: '',
        role: row.roleC,
        method: row.methodC,
        frequency: row.frequencyC,
        owner: row.ownerid,
        checkName: row.name,
        queryText: '',
        source: this.cdrpService.idrpTemplate[this.data.selecttemplate].name,
        createdBy: row.ownerid,
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
        purpose: row.purposeC,
        description: row.descriptionC,
        visit: '',
        role: row.roleC,
        method: row.methodC,
        frequency: row.frequencyC,
        owner: row.ownerid,
        checkName: row.name,
        queryText: '',
        source: this.cdrpService.idrpTemplate[this.data.selecttemplate].name,
        createdBy: row.ownerid,
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
      console.log(res.text());
      } );
    this.dialogRef2.close('addedChecks');
  }
}
