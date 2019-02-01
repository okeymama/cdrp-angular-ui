import { Component, OnInit } from '@angular/core';
import { Tdata, dataTrajectory , checks, expectedData, Trajectory} from '../tableData';
import { CommentComponent } from '../comment/comment.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DeletetrajectoryComponent } from '../deletetrajectory/deletetrajectory.component';
import { EditdatacategoryComponent } from '../editdatacategory/editdatacategory.component';
import { CdrpService } from '../cdrp.service';
import { BuisnessruleComponent } from '../buisnessrule/buisnessrule.component';
import { idrpPlanDetail } from '../ViewInterfaces';

@Component({
  selector: 'app-data-trajectory',
  templateUrl: './data-trajectory.component.html',
  styleUrls: ['./data-trajectory.component.css']
})
export class DataTrajectoryComponent implements OnInit {

  dt: dataTrajectory[] = [
    { 'expectedData': 'Vital Sign ',
      'appliedVisit': 'All',
      'source': 'EDC',
      'dataTransfer': ' ',
      'criticalData': 'Yes - Primary End Point'
    },
    { 'expectedData': 'Swollen and Tender Joint Counts - Right ',
      'appliedVisit': 'Screening',
      'source': 'EDC',
      'dataTransfer': ' ',
      'criticalData': 'Yes - Additional End Point'
    },
    { 'expectedData': 'Morning Stiffness',
      'appliedVisit': 'Screening, Week 2',
      'source': 'EDC, Central Lab',
      'dataTransfer': ' ',
      'criticalData': 'No'
    },
    { 'expectedData': 'Date of Visit',
      'appliedVisit': 'All',
      'source': 'EDC',
      'dataTransfer': ' ',
      'criticalData': 'Yes - Efficacy'
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
  }
];

  trajectory: Trajectory[] = [
    {
      'content1': this.dt,
      'content2': this.idrpCheck
    },
    {
      'content1': this.dt,
      'content2': this.idrpCheck
    },
    {
      'content1': this.dt,
      'content2': this.idrpCheck
    }

  ];
  arrow: string[];
  x: number;
  y: number;
  selectedCat: any;
  selectedTraj: any;
  //dataTrajectoryData;
  data;

datacategory: dataTrajectory;

  arrowState = [];
  panelState = [];
  rowstate = [];
  selectState = [];
  appliedVisitList=['a'];
  allAppliedVisitList = [];
  concatVisits:string ;
  constructor(public dialog3: MatDialog, public dialog: MatDialog, public dialog1: MatDialog,
     public dialog2: MatDialog, private cdrpService: CdrpService) {

  }
comment(expectdata): void {
 console.log(expectdata);
 const dialogConfig = new MatDialogConfig();
 dialogConfig.position = {
   'right': '30px',
 };
 dialogConfig.width = '350px';
 dialogConfig.height = '280px';
 dialogConfig.data = expectdata;
 const dialogRef = this.dialog.open(CommentComponent, dialogConfig);

}
settings(expectdata):  void {
  console.log(expectdata);
  this.cdrpService.selectdatacategory(expectdata);
  const dialogConfig3 =  new MatDialogConfig();
  dialogConfig3.position =  {
  };
  dialogConfig3.width = '900px';
  dialogConfig3.height = '580px';
  dialogConfig3.data = expectdata;
  const dialogRef =  this.dialog3.open(BuisnessruleComponent, dialogConfig3);
  }
edit(val1, val2): void {

  const dialogConfig2 = new MatDialogConfig();
  dialogConfig2.width = '1000px';
  dialogConfig2.height = '150px';
  this.datacategory = this.trajectory[val1].content1[val2];
  console.log(this.datacategory);
  dialogConfig2.data = this.datacategory;
  const dialogRef2 = this.dialog2.open(EditdatacategoryComponent, dialogConfig2);

 }
delete(expectdata1, expectdata2): void {
 console.log(expectdata1);
 const dialogConfig1 = new MatDialogConfig();
 dialogConfig1.width = '350px';
 dialogConfig1.height = '145px';
 dialogConfig1.data = expectdata1;
 const dialogRef1 = this.dialog1.open(DeletetrajectoryComponent, dialogConfig1);
 dialogRef1.beforeClosed().subscribe(result => {
  console.log('in parent' + result);
  if (result === 'deleted') {
  this.rowstate[expectdata1][expectdata2] =  !this.rowstate[expectdata1][expectdata2];
  }
  });
}

addChecks(trajId, rowId, selectedCat) {
  if (this.selectState[trajId][rowId] === false) {
    this.selectedCat = selectedCat;
    this.selectState[trajId][rowId] = true;
    this.selectedTraj = trajId;
  } else {
    this.selectedCat = 'null';
    this.selectState[trajId][rowId] = false;
  }
  this.cdrpService.setSelectedCategory(this.selectedCat);
}

selectIcon() {

}

  ngOnInit() {
    /*this.dataTrajectoryData = this.cdrpService.getIdrpData();
    console.log("In Data Traj oninit");
    console.log(this.dataTrajectoryData);
    console.log("Data trajectory length"+this.dataTrajectoryData.dataTrajectoryDTOList.length);*/
    console.log('In OnInit of Data Trajectory');
    this.cdrpService.getIdrpPlanDetailById().subscribe((res:idrpPlanDetail[]) => {
    this.data = res[0];
    //this.cdrpService.setIdrpData(res[0]);
    console.log("Data trajectory length "+this.data.dataTrajectoryDTOList.length);
    for (let c = 0; c < this.data.dataTrajectoryDTOList.length; c++) {
      for (let d = 0; d < this.data.dataTrajectoryDTOList[c].expectedDataCategoryDTOList.length; d++) {
        console.log("Expected length "+this.data.dataTrajectoryDTOList[c].expectedDataCategoryDTOList.length);
      //  console.log(this.data.dataTrajectoryDTOList[c].expectedDataCategoryDTOList[d]);
      }
    }
    for (let c = 0; c < this.data.dataTrajectoryDTOList.length; c++) {
      const arr1 = [];
      const arr2 = [];
      const arr3 = [];
      const arr4 = [];
      this.appliedVisitList = [];
      for (let d = 0; d < this.data.dataTrajectoryDTOList[c].expectedDataCategoryDTOList.length; d++) {
        arr1[d] = 'keyboard_arrow_right';
        arr2[d] = false;
        arr3[d] = true;
        arr4[d] = false;
        console.log(this.appliedVisitList);
        //this.appliedVisitList[d] ='abc';
        this.concatVisits = '';
        //console.log("length of visit "+this.data.dataTrajectoryDTOList[c].expectedDataCategoryDTOList[d].appliedVisitDTOList);
       if(this.data.dataTrajectoryDTOList[c].expectedDataCategoryDTOList[d].appliedVisitDTOList !== null){
         
         console.log('text : '+this.data.dataTrajectoryDTOList[c].expectedDataCategoryDTOList[d].appliedVisitDTOList.length);
        for (let e = 0; e < this.data.dataTrajectoryDTOList[c].expectedDataCategoryDTOList[d].appliedVisitDTOList.length; e++) {
          let visitname = this.data.dataTrajectoryDTOList[c].expectedDataCategoryDTOList[d].appliedVisitDTOList[e].visitName;
          this.concatVisits = e!==0?this.concatVisits+","+ visitname: visitname;
          
          console.log(this.concatVisits);
        }
        console.log("val d = "+ d + " "+this.concatVisits) ;
        
        }
        this.appliedVisitList[d] = this.concatVisits;
        
      }
      this.arrowState[c] = arr1;
      this.panelState[c] = arr2;
      this.rowstate[c] = arr3;
      this.selectState[c] = arr4;
      this.allAppliedVisitList[c] = this.appliedVisitList;
    }
    console.log(this.allAppliedVisitList);

 });

  }

  togglePanel(indexToToggle, upperIndex) {
    this.panelState[upperIndex][indexToToggle] = !this.panelState[upperIndex][indexToToggle];

    if (this.arrowState[upperIndex][indexToToggle] === 'keyboard_arrow_right') {
        this.arrowState[upperIndex][indexToToggle] = 'keyboard_arrow_down';
    } else {
        this.arrowState[upperIndex][indexToToggle] = 'keyboard_arrow_right';
    }

  }

}
