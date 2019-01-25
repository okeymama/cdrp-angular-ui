import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { checks} from '../tableData';
import { ShowIdrpTemplateComponent } from '../show-idrp-template/show-idrp-template.component';
import { ShowIdrpStudyTemplateComponent } from '../show-idrp-study-template/show-idrp-study-template.component';

@Component({
  selector: 'app-copyfromstudy',
  templateUrl: './copyfromstudy.component.html',
  styleUrls: ['./copyfromstudy.component.css']
})
export class CopyfromstudyComponent implements OnInit {
  public template = [
    {
      'studynumber': 'M45-945',
      'TA': 'Lorem ipsum dolor sit amet, consectetur',
      'Compound': 'Lorem ipsum',
      'Indication': 'Lorem ipsum'
    }, {
      'studynumber': 'M45-390',
      'TA': 'Lorem ipsum dolor sit amet, consectetur',
      'Compound': 'Lorem ipsum',
      'Indication': 'Lorem ipsum'
    }
  ];

  idrpCheck: checks[] = [
    {
      'category': 'Vital sign',
      'purpose': 'Data Quality',
      'description': 'Review for duplicate visits (same date different visit name) in EDC',
      'visit': '',
      'role': 'CDR',
      'method': 'Analytics',
      'frequency': 'Monthly',
      'owner': 'John Smith',
      'checkName': 'Lorem Ipsusm',
      'queryText': '',
      'source': 'Template 001',
    },
    {
        'category': 'Vital sign',
        'purpose': 'Data Quality',
        'description': 'Review dates against the protocol defined windows and for logic.',
        'visit': '',
        'role': 'CDR',
        'method': 'LSH Edit Checks, Analytics',
        'frequency': 'Monthly',
        'owner': 'John Smith',
        'checkName': 'Lorem Ipsusm',
        'queryText': '',
        'source': 'Study M3422',
    },
    {
        'category': 'Vital sign',
        'purpose': 'Data Quality',
        'description': 'Review for appropriate protocol adherence, sequence of events and logic.' +
        'If an unscheduled visit occurs, check for any time-associated procedures' +
        '(i.e. AEs, pregnancy, ECG, CXR) or entered in error query site to correct',
        'visit': '',
        'role': 'Remote Monitor',
        'method': 'Manual',
        'frequency': 'Upon unscheduled Visit ',
        'owner': 'John Smith',
        'checkName': 'Lorem Ipsusm',
        'queryText': '',
        'source': 'Template 554 - Modified',
    },
    {
      'category': 'Date of Visit',
      'purpose': 'Data Quality',
      'description': 'Review for duplicate visits (same date different visit name) in EDC',
      'visit': '',
      'role': 'CDR',
      'method': 'Analytics',
      'frequency': 'Monthly',
      'owner': 'John Smith',
      'checkName': 'Lorem Ipsusm',
      'queryText': '',
      'source': 'Template 001',
    },
    {
        'category': 'Date of Visit',
        'purpose': 'Data Quality',
        'description': 'Review dates against the protocol defined windows and for logic.',
        'visit': '',
        'role': 'CDR',
        'method': 'LSH Edit Checks, Analytics',
        'frequency': 'Monthly',
        'owner': 'John Smith',
        'checkName': 'Lorem Ipsusm',
        'queryText': '',
        'source': 'Study M3422',
    },
    {
        'category': 'Date of Visit',
        'purpose': 'Data Quality',
        'description': 'Review for appropriate protocol adherence, sequence of events and logic.' +
        'If an unscheduled visit occurs, check for any time-associated procedures' +
        '(i.e. AEs, pregnancy, ECG, CXR) or entered in error query site to correct',
        'visit': '',
        'role': 'Remote Monitor',
        'method': 'Manual',
        'frequency': 'Upon unscheduled Visit ',
        'owner': 'John Smith',
        'checkName': 'Lorem Ipsusm',
        'queryText': '',
        'source': 'Template 554 - Modified',
    }
  ];

public Ta = [];
public Compound = [];
public Indication = [];
public selectedTa = [];
public selectedComp = [];
public selectedIndi = [];
reselected = [];
public dropdownSettings = {};
  constructor(public dialog3: MatDialog, public snackBar: MatSnackBar) { }

  public showtemplate(template: any) {
  console.log(template);
  const dialogRef2 = this.dialog3.open(ShowIdrpStudyTemplateComponent, {
    width: '900px',
    height: '580px',
    data: {templateName: template, fields: this.idrpCheck}
  });

  dialogRef2.beforeClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    if (result === 'closeAll') {
      dialogRef2.close();
    } else if (result === 'closeDialogBox') {
      console.log('No checks Added');
    } else if (result === 'addedChecks') {
      console.log('Checks Added');
    }
  });

  }

  public search(form) {

    if (this.selectedTa.length === 0 && this.selectedComp.length === 0  && this.selectedIndi.length === 0 && form.value.tempname === '') {
      this.snackBar.open('Specify Filters or Search By Study Number',  'close', {
      duration: 3000,
      });
     }  else {

    if (form.value.tempname !== '') {
    this.selectedTa = [];
    this.selectedIndi = [];
    this.selectedComp = [];
    this.template = [
      {
      'studynumber': 'M45-360',
      'TA': 'Lorem ipsum dolor sit amet, consectetur',
      'Compound': 'Lorem ipsum',
      'Indication': 'Lorem ipsum'
      }
    ];
    }
  }
    console.log(form.value.tempname);
}
  onTaSelect(item: any) {
    // this.selectedItems.push(item);
    console.log(this.selectedTa);
  }
  onTaDeSelect(item: any) {
    console.log(this.selectedTa);
  }
  onTaSelectAll(items: any) {
   // this.selectedTa = [];
    // this.selectedTa = items;
    console.log(this.selectedTa);
  }
  onTaDeSelectAll(items: any) {
    this.selectedTa = [];
    console.log(this.selectedTa);
  }
  onCompoundSelect(item: any) {
    // this.selectedItems.push(item);
    console.log(this.selectedComp);
  }
  onCompoundDeSelect(item: any) {
    console.log(this.selectedComp);
  }
  onCompoundSelectAll(items: any) {
    this.selectedComp = [];
    this.selectedComp = items;
    console.log(this.selectedComp);
  }
  onCompoundDeSelectAll(items: any) {
    this.selectedComp = [];
    console.log(this.selectedComp);
  }
  onIndicationSelect(item: any) {
    // this.selectedItems.push(item);
    console.log(this.selectedIndi);
  }
  onIndicationDeSelect(item: any) {
    console.log(this.selectedIndi);
  }
  onIndicationSelectAll(items: any) {
    this.selectedIndi = [];
    this.selectedIndi = items;
    console.log(this.selectedIndi);
  }
  onIndicationDeSelectAll(items: any) {
    this.selectedIndi = [];
    console.log(this.selectedIndi);
  }
  removefilters() {
    this.selectedTa = [];
    this.selectedComp = [];
    this.selectedIndi = [];
    console.log(this.selectedTa);
    console.log(this.selectedIndi);
    console.log(this.selectedComp);
  }
  removeTafilter(ta: any) {
    // console.log(ta);
    const index: number = this.selectedTa.indexOf(ta);
    // console.log(index);
  if (index !== -1) {
        this.selectedTa.splice(index, 1);
    }
    console.log(this.selectedTa);
    this.reselected = this.selectedTa;
  console.log(this.reselected);
  this.selectedTa = [];
 for (let i = 0; i < this.reselected.length ; i++) {
  this.selectedTa[i] = this.reselected[i];
 }
  }
  removeCompfilter(comp: any) {
    // console.log(ta);
    const index: number = this.selectedComp.indexOf(comp);
    // console.log(index);
  if (index !== -1) {
        this.selectedComp.splice(index, 1);
    }
    this.reselected = this.selectedComp;
  console.log(this.reselected);
  this.selectedComp = [];
 for (let i = 0; i < this.reselected.length ; i++) {
  this.selectedComp[i] = this.reselected[i];
 }
  }
  removeIndifilter(indi: any) {
    console.log(indi);
    const index: number = this.selectedIndi.indexOf(indi);
    // console.log(index);
  if (index !== -1) {
        this.selectedIndi.splice(index, 1);
    }
    this.reselected = this.selectedIndi;
  console.log(this.reselected);
  this.selectedIndi = [];
 for (let i = 0; i < this.reselected.length ; i++) {
  this.selectedIndi[i] = this.reselected[i];
 }
  }
   ngOnInit() {
      this.Ta = [
        { item_id: 1, item_text: 'TA1' },
        { item_id: 2, item_text: 'TA2' },
        { item_id: 3, item_text: 'TA3' },
        { item_id: 4, item_text: 'TA4' },
        { item_id: 5, item_text: 'TA5' }
      ];
      this.Compound = [
        { item_id: 1, item_text: 'Comp1' },
        { item_id: 2, item_text: 'Comp2' },
        { item_id: 3, item_text: 'Comp3' },
        { item_id: 4, item_text: 'Comp4' },
        { item_id: 5, item_text: 'Comp5' }
      ];
      this.Indication = [
        { item_id: 1, item_text: 'Indi1' },
        { item_id: 2, item_text: 'Indi2' },
        { item_id: 3, item_text: 'Indi3' },
        { item_id: 4, item_text: 'Indi4' },
        { item_id: 5, item_text: 'Indi5' }
      ];
      this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 1,
        allowSearchFilter: true,
        maxHeight: 80,
        searchPlaceholderText: 'Search TA'
      };

    }
}
