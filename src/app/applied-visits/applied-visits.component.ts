import { Component, OnInit } from '@angular/core';
import { Tdata, dataTrajectory , checks, expectedData, Trajectory} from '../tableData';
import { CdrpService } from '../cdrp.service';
import { IdrpPlanDetail } from '../ViewInterfaces';

@Component({
  selector: 'app-applied-visits',
  templateUrl: './applied-visits.component.html',
  styleUrls: ['./applied-visits.component.css']
})
export class AppliedVisitsComponent implements OnInit {

  // panelState: boolean[];
  data = [{
    'appliedVisitName': 'All',
    'appliedVisitList' : [
      {
        'expectedDataCategory': 'Vital sign',
        'appliedDataTrajectory': 'DATA TRAJECTORY 1, DATA TRAJECTORY 2',
        'source': 'EDC',
        'dataTransferFrequency': '',
        'criticalData': 'Yes - Primary End Point',
      'idrpCheckList': [
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
      ]
      },

      {
        'expectedDataCategory': 'Swollen and Tender Joint Counts-Right',
        'appliedDataTrajectory': 'DATA TRAJECTORY 1',
        'source': 'EDC',
        'dataTransferFrequency': '',
        'criticalData': 'Yes - Additional End Point',
      'idrpCheckList': [
      {
        'category': 'Swollen and Tender Joint Counts-Right',
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
        'category': 'Swollen and Tender Joint Counts-Right',
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
      }
      ]
      },
      {
        'expectedDataCategory': 'Morning Stiffness',
        'appliedDataTrajectory': 'DATA TRAJECTORY 1',
        'source': 'EDC, Central Lab',
        'dataTransferFrequency': '',
        'criticalData': 'No',
      'idrpCheckList': [
      {
        'category': 'Morning Stiffness',
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
      }
      ]
      }
    ]
    },
    {
    'appliedVisitName': 'Screening',
    'appliedVisitList' : [
      {
        'expectedDataCategory': 'Vital sign',
        'appliedDataTrajectory': 'DATA TRAJECTORY 1, DATA TRAJECTORY 2',
        'source': 'EDC',
        'dataTransferFrequency': '',
        'criticalData': 'Yes - Primary End Point',
      'idrpCheckList': [
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
        }
      ]
      },

      {
        'expectedDataCategory': 'Swollen and Tender Joint Counts-Right',
        'appliedDataTrajectory': 'DATA TRAJECTORY 1',
        'source': 'EDC',
        'dataTransferFrequency': '',
        'criticalData': 'Yes - Additional End Point',
      'idrpCheckList': [
      {
        'category': 'Swollen and Tender Joint Counts-Right',
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
        'category': 'Swollen and Tender Joint Counts-Right',
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
      }
      ]
      },

    ]
    }
   ];


arrow: string[];
// data;
appliedVisitList;
newObject;
newObjectList = [];
update;
arrowState = [];
panelState = [];
rowstate = [];
selectState = [];

constructor(private cdrpService: CdrpService) {
 // panelState=boolean[];
 /* this.dt.forEach(obj => {
    this.panelState.push(false);
  })*/
 // this.panelState = new Array(this.ed.length).fill(false);
  // this.arrow = new Array(this.ed.length).fill('keyboard_arrow_right');
}

ngOnInit() {
  console.log('In OnInit of Applied Visits');
  // this.cdrpService.getIdrpPlanDetailById().subscribe((res: IdrpPlanDetail[]) => {
  // this.data = res[0];
  for (let c = 0; c < this.data.length; c++) {
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];
    for (let d = 0; d < this.data[c].appliedVisitList.length; d++) {
      arr1[d] = 'keyboard_arrow_right';
      arr2[d] = false;
      arr3[d] = true;
      arr4[d] = false;


    }
    this.arrowState[c] = arr1;
    this.panelState[c] = arr2;
    this.rowstate[c] = arr3;
    this.selectState[c] = arr4;
  }

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
