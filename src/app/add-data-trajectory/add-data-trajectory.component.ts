import { Component, OnInit, ViewChild , ContentChild, Input, OnChanges, AfterViewInit} from '@angular/core';
import { CdrpService } from '../cdrp.service';
import {ActivatedRoute } from '../../../node_modules/@angular/router';
import { dataTrajectoryForms, applicableVisit, visitSource} from '../tableData';
import { MatSort, MatTableDataSource, MatSortable, MatPaginator} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddFormsComponent } from '../add-forms/add-forms.component';
import {  ModifyApplicableVisitsComponent  } from '../modify-applicable-visits/modify-applicable-visits.component';
import { ExpectedDataCategoryList, DataTrajectoryList, AppliedVisitList } from '../ViewInterfaces';
import { Router } from '../../../node_modules/@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-data-trajectory',
  templateUrl: './add-data-trajectory.component.html',
  styleUrls: ['./add-data-trajectory.component.css']
})

export class AddDataTrajectoryComponent implements OnInit {

  dtFormsObj;
  dtForms = [];
 /* v1: visitSource =
  {
    raveEdc: ['Cycle 1 Day 1', 'Cycle 1 Day 2', 'Cycle 1 Day 3', 'Cycle 1 Day 4', 'Cycle 1 Day 5',
    'Cycle 1 Day 6', 'Cycle 1 Day 7', 'Cycle 1 Day 8', 'Cycle 1 Day 9', 'Cycle 1 Day 10',
    'Cycle 2 Day 1', 'Cycle 2 Day 2', 'Cycle 2 Day 3', 'Cycle 2 Day 4', 'Cycle 2 Day 5',
    'Cycle 2 Day 6', 'Cycle 2 Day 7', 'Cycle 2 Day 8', 'Cycle 2 Day 9', 'Cycle 2 Day 10'],
    mdr: ['Cycle 1 Day 1', 'Cycle 1 Day 2', 'Cycle 1 Day 3', 'Cycle 1 Day 4', 'Cycle 1 Day 5',
    'Cycle 1 Day 6']
  };

  v2: visitSource =
  {
    raveEdc: ['Cycle 1 Day 1', 'Cycle 1 Day 2', 'Cycle 1 Day 3', 'Cycle 1 Day 4', 'Cycle 1 Day 5',
    'Cycle 1 Day 6', 'Cycle 1 Day 7', 'Cycle 1 Day 8', 'Cycle 1 Day 9', 'Cycle 1 Day 10',
    'Cycle 2 Day 1', 'Cycle 2 Day 2', 'Cycle 2 Day 3', 'Cycle 2 Day 4', 'Cycle 2 Day 5',
    'Cycle 2 Day 6', 'Cycle 2 Day 7', 'Cycle 2 Day 8', 'Cycle 2 Day 9', 'Cycle 2 Day 10',
    'Cycle 3 Day 1', 'Cycle 3 Day 2', 'Cycle 3 Day 3', 'Cycle 3 Day 4', 'Cycle 3 Day 5',
    'Cycle 3 Day 6', 'Cycle 3 Day 7', 'Cycle 3 Day 8', 'Cycle 3 Day 9', 'Cycle 3 Day 10',
    'Cycle 4 Day 1', 'Cycle 4 Day 2', 'Cycle 4 Day 3', 'Cycle 4 Day 4', 'Cycle 4 Day 5'],
    mdr: ['Cycle 1 Day 1', 'Cycle 1 Day 2', 'Cycle 1 Day 3', 'Cycle 1 Day 4', 'Cycle 1 Day 5',
    'Cycle 1 Day 6']
  };

  v3: visitSource =
  {
    raveEdc: ['Cycle 1 Day 1', 'Cycle 1 Day 2', 'Cycle 1 Day 3', 'Cycle 1 Day 4', 'Cycle 1 Day 5',
    'Cycle 1 Day 6', 'Cycle 1 Day 7', 'Cycle 1 Day 8', 'Cycle 1 Day 9', 'Cycle 1 Day 10'],
    mdr: ['Cycle 1 Day 1', 'Cycle 1 Day 2', 'Cycle 1 Day 3', 'Cycle 1 Day 4', 'Cycle 1 Day 5',
    'Cycle 1 Day 6']
  };

  v4: visitSource =
  {
    raveEdc: ['Cycle 1 Day 1', 'Cycle 1 Day 2', 'Cycle 1 Day 3', 'Cycle 1 Day 4', 'Cycle 1 Day 5',
    'Cycle 1 Day 6', 'Cycle 1 Day 7', 'Cycle 1 Day 8', 'Cycle 1 Day 9', 'Cycle 1 Day 10',
    'Cycle 2 Day 1', 'Cycle 2 Day 2', 'Cycle 2 Day 3', 'Cycle 2 Day 4', 'Cycle 2 Day 5',
    'Cycle 2 Day 6', 'Cycle 2 Day 7', 'Cycle 2 Day 8', 'Cycle 2 Day 9', 'Cycle 2 Day 10',
    'Cycle 3 Day 1', 'Cycle 3 Day 2', 'Cycle 3 Day 3', 'Cycle 3 Day 4', 'Cycle 3 Day 5' ],
    mdr: ['Cycle 1 Day 1', 'Cycle 1 Day 2', 'Cycle 1 Day 3', 'Cycle 1 Day 4', 'Cycle 1 Day 5',
    'Cycle 1 Day 6']
  };

  v5: visitSource =
  {
    raveEdc: ['Cycle 1 Day 1', 'Cycle 1 Day 2', 'Cycle 1 Day 3'],
    mdr: ['Cycle 1 Day 1', 'Cycle 1 Day 2']
  };*/

  v1: visitSource =
  {
    raveEdc: [],
    mdr: []
  };

  v2: visitSource =
  {
    raveEdc: [],
    mdr: []
  };

  v3: visitSource =
  {
    raveEdc: [],
    mdr: []
  };

  v4: visitSource =
  {
    raveEdc: [ ],
    mdr: []
  };

  v5: visitSource =
  {
    raveEdc: [],
    mdr: []
  };

  v6: visitSource =
  {
    raveEdc: [],
    mdr: []
  };

  v7: visitSource =
  {
    raveEdc: [],
    mdr: []
  };

  v8: visitSource =
  {
    raveEdc: [],
    mdr: []
  };

  v9: visitSource =
  {
    raveEdc: [],
    mdr: []
  };

  v10: visitSource =
  {
    raveEdc: [],
    mdr: []
  };

  appVisits: applicableVisit =
    {
      noOfVisits: 0,
      visits: this.v1
    };

  appVisits1: applicableVisit =
    {
      noOfVisits: 0,
      visits: this.v2
    };
  appVisits2: applicableVisit =
    {
      noOfVisits: 0,
      visits: this.v3
    };
  appVisits3: applicableVisit =
    {
      noOfVisits: 0,
      visits: this.v4
    };
  appVisits4: applicableVisit =
    {
      noOfVisits: 0,
      visits: this.v5
    };

  appVisits5: applicableVisit =
    {
      noOfVisits: 0,
      visits: this.v6
    };

  appVisits6: applicableVisit =
    {
      noOfVisits: 0,
      visits: this.v7
    };
  appVisits7: applicableVisit =
    {
      noOfVisits: 0,
      visits: this.v8
    };

  appVisits8: applicableVisit =
    {
      noOfVisits: 0,
      visits: this.v9
    };
  appVisits9: applicableVisit =
    {
      noOfVisits: 0,
      visits: this.v10
    };

   appVisitsList = [this.appVisits, this.appVisits1, this.appVisits2, this.appVisits3 , this.appVisits4,
    this.appVisits5, this.appVisits6, this.appVisits7, this.appVisits8, this.appVisits9];
  /*dtForms: dataTrajectoryForms[] = [
    {
      'expectedDataCategory': 'Vital Sign',
      'appliedVisit': this.appVisits,
      'dataSource': ['EDC,Covance,Other', 'IRT', 'ePro', 'Covance', 'Central Lab', 'Parexel'],
      'dataTransferFrequency': ['Monthly', 'Weekly', 'Daily', 'Hourly'],
      'criticalData': ['No', 'Yes - Primary End Point', 'Yes - Second End Point', 'Yes - Efficacy', 'Yes - Safety']
    },
    {
      'expectedDataCategory': 'Informed Consent',
      'appliedVisit': this.appVisits1,
      'dataSource': ['EDC,Covance,Other', 'IRT', 'ePro', 'Covance', 'Central Lab', 'Parexel'],
      'dataTransferFrequency': ['Monthly', 'Weekly', 'Daily', 'Hourly'],
      'criticalData': ['No', 'Yes - Primary End Point', 'Yes - Second End Point', 'Yes - Efficacy', 'Yes - Safety']
    },
    {
      'expectedDataCategory': 'Physical Exam',
      'appliedVisit': this.appVisits4,
      'dataSource': ['EDC,Covance,Other', 'IRT', 'ePro', 'Covance', 'Central Lab', 'Parexel'],
      'dataTransferFrequency': ['Monthly', 'Weekly', 'Daily', 'Hourly'],
      'criticalData': ['No', 'Yes - Primary End Point', 'Yes - Second End Point', 'Yes - Efficacy', 'Yes - Safety']
    },
    {
      'expectedDataCategory': 'Dosing Related to Pharmacokin',
      'appliedVisit': this.appVisits3,
      'dataSource': ['EDC,Covance,Other', 'IRT', 'ePro', 'Covance', 'Central Lab', 'Parexel'],
      'dataTransferFrequency': ['Monthly', 'Weekly', 'Daily', 'Hourly'],
      'criticalData': ['No', 'Yes - Primary End Point', 'Yes - Second End Point', 'Yes - Efficacy', 'Yes - Safety']
    },
    {
      'expectedDataCategory': 'Imaging',
      'appliedVisit': this.appVisits2,
      'dataSource': ['EDC,Covance,Other', 'IRT', 'ePro', 'Covance', 'Central Lab', 'Parexel'],
      'dataTransferFrequency': ['Monthly', 'Weekly', 'Daily', 'Hourly'],
      'criticalData': ['No', 'Yes - Primary End Point', 'Yes - Second End Point', 'Yes - Efficacy', 'Yes - Safety']
    },
    {
      'expectedDataCategory': 'Blood Sugar',
      'appliedVisit': this.appVisits9,
      'dataSource': ['EDC,Covance,Other', 'IRT', 'ePro', 'Covance', 'Central Lab', 'Parexel'],
      'dataTransferFrequency': ['Monthly', 'Weekly', 'Daily', 'Hourly'],
      'criticalData': ['No', 'Yes - Primary End Point', 'Yes - Second End Point', 'Yes - Efficacy', 'Yes - Safety']
    },
    {
      'expectedDataCategory': 'Viral Levels',
      'appliedVisit': this.appVisits8,
      'dataSource': ['EDC,Covance,Other', 'IRT', 'ePro', 'Covance', 'Central Lab', 'Parexel'],
      'dataTransferFrequency': ['Monthly', 'Weekly', 'Daily', 'Hourly'],
      'criticalData': ['No', 'Yes - Primary End Point', 'Yes - Second End Point', 'Yes - Efficacy', 'Yes - Safety']
    },
    {
      'expectedDataCategory': 'System testing',
      'appliedVisit': this.appVisits7,
      'dataSource': ['EDC,Covance,Other', 'IRT', 'ePro', 'Covance', 'Central Lab', 'Parexel'],
      'dataTransferFrequency': ['Monthly', 'Weekly', 'Daily', 'Hourly'],
      'criticalData': ['No', 'Yes - Primary End Point', 'Yes - Second End Point', 'Yes - Efficacy', 'Yes - Safety']
    },
    {
      'expectedDataCategory': 'Immunity testing',
      'appliedVisit': this.appVisits6,
      'dataSource': ['EDC,Covance,Other', 'IRT', 'ePro', 'Covance', 'Central Lab', 'Parexel'],
      'dataTransferFrequency': ['Monthly', 'Weekly', 'Daily', 'Hourly'],
      'criticalData': ['No', 'Yes - Primary End Point', 'Yes - Second End Point', 'Yes - Efficacy', 'Yes - Safety']
    },
    {
      'expectedDataCategory': 'Physical Examination',
      'appliedVisit': this.appVisits5,
      'dataSource': ['EDC,Covance,Other', 'IRT', 'ePro', 'Covance', 'Central Lab', 'Parexel'],
      'dataTransferFrequency': ['Monthly', 'Weekly', 'Daily', 'Hourly'],
      'criticalData': ['No', 'Yes - Primary End Point', 'Yes - Second End Point', 'Yes - Efficacy', 'Yes - Safety']
    }
  ];*/

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
     mdr: ['Cycle 1 Day 1', 'Cycle 1 Day 2', 'Cycle 1 Day 3', 'Cycle 1 Day 4', 'Cycle 1 Day 5',
     'Cycle 1 Day 6',
     'Cycle 2 Day 1', 'Cycle 2 Day 2', 'Cycle 2 Day 3', 'Cycle 2 Day 4', 'Cycle 2 Day 5',
     'Cycle 2 Day 6',
     'Cycle 3 Day 1', 'Cycle 3 Day 2', 'Cycle 3 Day 3', 'Cycle 3 Day 4', 'Cycle 3 Day 5',
     'Cycle 3 Day 6']

    }
  ];

  studyID: string;
  sourceVariable: string[] = [];
  frequencyVariable: string[] = [];
  criticalVariable: string[] = [];
  iconState = [];
  c = 'edit';
  copySelect = '';
  copySelectIndexs = [];
  showOptions = false;

  newTrajectoryName;
  newTrajectoryDescription;
  newTrajectory ;
  expectedCategoriesList = [];
  list = [];
  addSelectedCategory ;
  addVisits ;
  addVisitsList = [];
  check = [];
  expectedDataList;
  /*material sort and display of tables*/
  displayedColumns: string[] = ['select', 'expectedDataCategory', 'dataSource', 'appliedVisit', 'dataTransferFrequency', 'criticalData'];
  displayedColumns1: string[] = [];
  selection = new SelectionModel<dataTrajectoryForms>(true, []);
  selection1 = new SelectionModel<ExpectedDataCategoryList>(true, []);
  dataSource = new MatTableDataSource<any>(this.dtForms);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private cdrpService: CdrpService, private activateRouter: ActivatedRoute, private router: Router,
     public dialog: MatDialog, public dialog1: MatDialog, public snackBar: MatSnackBar) {
  }


  ngOnInit() {
    console.log('In add Trajectory ');

    this.expectedDataList = this.cdrpService.getSelectedMapping();
    console.log(this.expectedDataList);
    for (let i = 0 ; i < this.expectedDataList.length ; i++ ) {
      this.dtFormsObj =  {
          expectedDataCategory: this.expectedDataList[i],
          appliedVisit : this.appVisitsList[i],
          dataSource: ['EDC,Covance,Other', 'IRT', 'ePro', 'Covance', 'Central Lab', 'Parexel'],
          dataTransferFrequency: ['Monthly', 'Weekly', 'Daily', 'Hourly'],
          criticalData: ['No', 'Yes - Primary End Point', 'Yes - Second End Point', 'Yes - Efficacy', 'Yes - Safety']
      };
      this.dtForms.push(this.dtFormsObj);
      this.dtFormsObj = null;
    }
    console.log(this.dtForms);
    this.dataSource.sort = this.sort;
    this.studyID = this.cdrpService.id;
    this.newTrajectoryName = this.cdrpService.getNewTrajectoryName();
    this.newTrajectoryDescription = this.cdrpService.getNewTrajectoryDescription();
    this.dataSource.paginator = this.paginator;

    for (let c = 0; c < this.dtForms.length; c++) {
      this.sourceVariable[c] = this.dtForms[c].dataSource[0];
      this.frequencyVariable[c] = this.dtForms[c].dataTransferFrequency[0];
      this.criticalVariable[c] = this.dtForms[c].criticalData[0];
    }

    for (let d = 0; d < this.dtForms.length; d++) {
      this.iconState[d] = 'file_copy';
      this.check[d] = false;
    }
    console.log(this.iconState);
  }


  checkBox() {
    console.log('click it');
  }

  onSelect(selectedValue: any, ind1, id) {
    console.log(selectedValue + ' ' + ind1 + ' ' + id);
    if (id === 'sourceVariable') {
      this.sourceVariable[ind1] = selectedValue;
    } else if (id === 'frequencyVariable') {
      this.frequencyVariable[ind1] = selectedValue;
         } else if (id === 'criticalVariable') {
      this.criticalVariable[ind1] = selectedValue;
         }

    console.log(this.sourceVariable);
  }

  addFormsDialog(): void {
    const dialogRef = this.dialog.open(AddFormsComponent, {
      width: '400px',
      height: '450px',
      data: 'here'
    });

    dialogRef.beforeClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result !== null ) {
        for (let x = 0; x < result.length; x++) {
          const q = this.expectedDataList.indexOf(result[x]);
          if (q <= -1) {
            this.expectedDataList.push(result[x]);
            const r = this.expectedDataList.indexOf(result[x]);
            this.dtFormsObj =  {
              expectedDataCategory: this.expectedDataList[r],
              appliedVisit : this.appVisitsList[r],
              dataSource: ['EDC,Covance,Other', 'IRT', 'ePro', 'Covance', 'Central Lab', 'Parexel'],
              dataTransferFrequency: ['Monthly', 'Weekly', 'Daily', 'Hourly'],
              criticalData: ['No', 'Yes - Primary End Point', 'Yes - Second End Point', 'Yes - Efficacy', 'Yes - Safety']
          };
          this.dtForms.push(this.dtFormsObj);
          this.dtFormsObj = null;
          }
        }
        console.log(this.dtForms);
      }
      this.dataSource = new MatTableDataSource<any>(this.dtForms);
      for (let c = 0; c < this.dtForms.length; c++) {
        this.sourceVariable[c] = this.dtForms[c].dataSource[0];
        this.frequencyVariable[c] = this.dtForms[c].dataTransferFrequency[0];
        this.criticalVariable[c] = this.dtForms[c].criticalData[0];
      }
      for (let d = 0; d < this.dtForms.length; d++) {
        this.iconState[d] = 'file_copy';
        this.check[d] = false;
      }
    });
    console.log('doneeee');
  }

  editVisits(selectRow): void {
    console.log(selectRow);
    const dialogRef1 = this.dialog1.open(ModifyApplicableVisitsComponent, {
      width: '800px',
      height: '560px',
      data: {listOfVisits: selectRow.appliedVisit.visits, id: selectRow.expectedDataCategory}
    });

    dialogRef1.beforeClosed().subscribe(result => {
      console.log(result);
      if (result !== 'noChanges') {
        const idx =  this.dtForms.findIndex(x => x.expectedDataCategory === selectRow.expectedDataCategory);
        this.dtForms[idx].appliedVisit.visits.raveEdc = result.raveEdc;
        this.dtForms[idx].appliedVisit.visits.mdr = result.mdr;
        /*if(result.raveEdc.length > 0 )
        {
        this.dtForms[idx].appliedVisit.visits.raveEdc = result.raveEdc;
        }
        if(result.mdr.length > 0) {
        this.dtForms[idx].appliedVisit.visits.mdr = result.mdr;
        }*/
        this.dtForms[idx].appliedVisit.noOfVisits  = result.raveEdc.length + result.mdr.length;
      }
      console.log('The dialog was closed');
    });
  }

  copyVisits(selectRow, idx) {
    console.log('Selected row' + idx);
    console.log('copied ' + this.copySelect);

    if (this.copySelect === '') {
      this.copySelect = selectRow.expectedDataCategory;
      for (let d = 0 ; d < this.dtForms.length; d++) {
        if (d === idx) {
          console.log(this.iconState[d]);
          this.check[idx] = true;
          this.copySelectIndexs.push(idx);
         continue;
        }
       this.iconState[d] = 'check_circle';
      }
     // console.log(this.iconState);
    } else if (this.copySelect === selectRow.expectedDataCategory) {
      this.copySelect = '';
      console.log('idc== ' + idx);
      this.check[idx] = false;
     // document.getElementById(idx).style.color = 'rgb(17, 123, 209)';
      for (let d = 0 ; d < this.dtForms.length; d++) {
       this.iconState[d] = 'file_copy';
       this.check[d] = false;
      }
      for (let c = 0; c < this.copySelectIndexs.length; c++) {
        this.changeColor(this.copySelectIndexs[c]);
      }
      this.copySelectIndexs = [];

      // console.log(this.iconState);
    } else {

      if (this.check[idx] === false) {
        this.check[idx] = true;
      } else {
        this.check[idx] = false;
      }
      const i = this.copySelectIndexs.indexOf(idx);
      if (i > -1) {
        this.copySelectIndexs.splice(i, 1);
      } else {
        this.copySelectIndexs.push(idx);
      }
    }
    if (this.copySelectIndexs.length >= 2) {
      this.showOptions = true;
    } else {
      this.showOptions = false;
    }
    console.log(this.copySelectIndexs);
  }

  changeColor(id) {
   // console.log(id);
   // console.log(document.getElementById(id).style.color);
    console.log('change val in color ' + this.copySelect);
    if (this.check[id] === true) {
      document.getElementById(id).style.color = '#478300' ;
    } else {
      document.getElementById(id).style.color = 'rgb(17, 123, 209)' ;
    }

    console.log(this.check);
  }

  onSave() {
    for (let c = 0; c < this.copySelectIndexs.length; c++) {

      const idx =  this.dtForms.findIndex(x => x.expectedDataCategory === this.copySelect);
      this.dtForms[this.copySelectIndexs[c]].appliedVisit.noOfVisits = this.dtForms[idx].appliedVisit.noOfVisits;
      // this.dtForms[this.copySelectIndexs[c]].appliedVisit.visits = this.dtForms[idx].appliedVisit.visits;
      this.dtForms[this.copySelectIndexs[c]].appliedVisit.visits =  Object.assign([], this.dtForms[idx].appliedVisit.visits);
      console.log(this.dtForms[this.copySelectIndexs[c]].expectedDataCategory);
      console.log(this.dtForms[this.copySelectIndexs[c]].appliedVisit.noOfVisits);
      console.log(this.dtForms[this.copySelectIndexs[c]].appliedVisit.visits);
      document.getElementById(this.copySelectIndexs[c]).style.color = 'rgb(17, 123, 209)';
    }
    for (let d = 0 ; d < this.dtForms.length; d++) {
       this.iconState[d] = 'file_copy';
       this.check[d] = false;
      }
      this.copySelect = '';
      this.copySelectIndexs = [];
      this.showOptions = false;
      console.log('copyindex ' + this.copySelectIndexs);

  }

  cancelCopy() {
    this.showOptions = false;
    for (let c = 0; c < this.copySelectIndexs.length; c++) {
      document.getElementById(this.copySelectIndexs[c]).style.color = 'rgb(17, 123, 209)';
    }
    for (let d = 0 ; d < this.dtForms.length; d++) {
      this.iconState[d] = 'file_copy';
      this.check[d] = false;
    }
    this.copySelect = '';
    this.copySelectIndexs = [];
    console.log('copyindex ' + this.copySelectIndexs);
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

  AddNewTrajectory() {
    console.log('add traj');
    console.log(this.list);
    for (let x = 0; x < this.dataSource.data.length; x++) {
      const row = this.dataSource.data[x];
      console.log(row);
      this.selectedRowsCheck(row, x);
    }

    if (this.list.length === 0) {
      this.snackBar.open('Select Expected Data Categories to add to the Data Trajectory', 'close', {
        duration: 3000,
      });
    } else {
    console.log( this.cdrpService.getIdrpPlanId());
    this.newTrajectory = {
      idrpPlanDetailId : this.cdrpService.getIdrpPlanId(),
      dataTrajectoryName : this.newTrajectoryName,
      description : this.newTrajectoryDescription,
      createdBy : this.cdrpService.user,
      createdDate : null,
      lastUpdatedDate : null,
      expectedDataCategoryDTOList : this.list === [] ? [{}] : this.list,
      dataTrajectorySubjectAssignmentDTOList : null
    };
    console.log(this.newTrajectory);
    // if(this.expectedCategoriesList === )
    this.cdrpService.saveNewTrajectory(this.newTrajectory).subscribe((res) => {
      console.log(res.text());
      this.router.navigate(['/nav/next']);
    } );
    console.log(this.list);
    }
    console.log('called');

  }

  selectedRowsCheck(row, idx) {
    console.log(this.list);
    console.log('selected Rows ' + idx);
    console.log(row);
    let count = 0;
    this.addSelectedCategory  = null;
    this.addVisitsList = [];
    const i = this.list.indexOf(row);
    console.log('isSelected = ' + i);
    console.log(this.selection.isSelected(row) );
    if (this.selection.isSelected(row) && i <= -1) {
      console.log('createeeeee');
      console.log('list = ' + this.list);
      this.addVisits = null;
      const x = row.appliedVisit.visits.raveEdc.length;
      const y = row.appliedVisit.visits.mdr.length;
      for (let c = 0; c < x; c++) {
        this.addVisits = {
          visitId : count++,
          visitName : row.appliedVisit.visits.raveEdc[c]
        };
        this.addVisitsList.push(this.addVisits);
      }

      for (let c = 0; c < y; c++) {
        this.addVisits = {
          visitId : count++,
          visitName : row.appliedVisit.visits.mdr[c]
        };
        this.addVisitsList.push(this.addVisits);
      }
     // console.log(this.addVisitsList);
      this.addSelectedCategory = {
        expectedDataCategoryName : row.expectedDataCategory,
        source: this.sourceVariable[idx],
        dataTransferFrequency: this.frequencyVariable[idx],
        criticalData: this.criticalVariable[idx],
        appliedVisitDTOList: this.addVisitsList,
        createdBy: null,
        createdDate: null,
        lastUpdatedDate: null,
        idrpCheckDTOList: null
      };

      this.list.push(this.addSelectedCategory);

    } else {
      console.log('deselect');
      const j = this.list.findIndex( record => record.expectedDataCategoryName === row.expectedDataCategory);
      console.log(j);
      if (j >= 0) {
        this.list.splice(j, 1);
       }
    }

    console.log(this.list);
  }

}
