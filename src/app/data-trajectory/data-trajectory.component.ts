import { Component, OnInit } from '@angular/core';
import { Tdata, dataTrajectory ,checks,expectedData,Trajectory} from '../tableData';

@Component({
  selector: 'app-data-trajectory',
  templateUrl: './data-trajectory.component.html',
  styleUrls: ['./data-trajectory.component.css']
})
export class DataTrajectoryComponent implements OnInit {

  dt:dataTrajectory[]=[ 
    { "expectedData":"Vital Sign ",
      "appliedVisit":"All",
      "source":"EDC",
      "dataTransfer":" ",
      "criticalData":"Yes - Primary End Point"
    },
    { "expectedData":"Swollen and Tender Joint Counts - Right ",
      "appliedVisit":"Screening",
      "source":"EDC",
      "dataTransfer":" ",
      "criticalData":"Yes - Additional End Point"
    },
    { "expectedData":"Morning Stiffness",
      "appliedVisit":"Screening, Week 2",
      "source":"EDC, Central Lab",
      "dataTransfer":" ",
      "criticalData":"No"
    },
    { "expectedData":"Date of Visit",
      "appliedVisit":"All",
      "source":"EDC",
      "dataTransfer":" ",
      "criticalData":"Yes - Efficacy"
    }
];

idrpCheck:checks[]=[
  {
    "category":"Vital sign",
    "purpose":"Data Quality",
    "description":"Review for duplicate visits (same date different visit name) in EDC",
    "visit":"",
    "role":"CDR",
    "method":"Analytics",
    "frequency":"Monthly",
    "owner":"John Smith",
    "checkName":"Lorem Ipsusm",
    "queryText":"",
    "source":"Template 001",
  },
  {
      "category":"Vital sign",
      "purpose":"Data Quality",
      "description":"Review dates against the protocol defined windows and for logic.",
      "visit":"",
      "role":"CDR",
      "method":"LSH Edit Checks, Analytics",
      "frequency":"Monthly",
      "owner":"John Smith",
      "checkName":"Lorem Ipsusm",
      "queryText":"",
      "source":"Study M3422",
  },
  {
      "category":"Vital sign",
      "purpose":"Data Quality",
      "description":"Review for appropriate protocol adherence, sequence of events and logic.  If an unscheduled visit occurs, check for any time-associated procedures (i.e. AEs, pregnancy, ECG, CXR) or entered in error query site to correct",
      "visit":"",
      "role":"Remote Monitor",
      "method":"Manual",
      "frequency":"Upon unscheduled Visit ",
      "owner":"John Smith",
      "checkName":"Lorem Ipsusm",
      "queryText":"",
      "source":"Template 554 - Modified",
  }
]

  trajectory:Trajectory[]=[
    {
      "content1":this.dt,
      "content2":this.idrpCheck
    },
    {
      "content1":this.dt,
      "content2":this.idrpCheck
    },
    {
      "content1":this.dt,
      "content2":this.idrpCheck
    }

  ]
  arrow:string[];
  //state:boolean[][];
  x:number;
  y:number;
  //panelState:boolean[][]=[[false,false,false,false],[false,false,false,false],[false,false,false,false]];
 /* arrowState:string[][]=[['keyboard_arrow_right','keyboard_arrow_right','keyboard_arrow_right','keyboard_arrow_right'],
  ['keyboard_arrow_right','keyboard_arrow_right','keyboard_arrow_right','keyboard_arrow_right'],
  ['keyboard_arrow_right','keyboard_arrow_right','keyboard_arrow_right','keyboard_arrow_right']
  ]*/
  arrowState=[];
  panelState=[];
  
  constructor() {
    
   }

  ngOnInit() {
    for(var c=0;c<this.trajectory.length;c++)
    {
      var arr1 = []
      var arr2 =[]
      for(var d=0;d<this.dt.length;d++)
      {
        arr1[d] = "keyboard_arrow_right";
        arr2[d] = false;
      }
      this.arrowState[c] = arr1;
      this.panelState[c] = arr2;
    }
    console.log(this.arrowState);
    console.log(this.panelState);

  }

  togglePanel(indexToToggle,upperIndex)
  {
    this.panelState[upperIndex][indexToToggle] = !this.panelState[upperIndex][indexToToggle];

    if(this.arrowState[upperIndex][indexToToggle] == "keyboard_arrow_right")
        this.arrowState[upperIndex][indexToToggle] = "keyboard_arrow_down";
    else
        this.arrowState[upperIndex][indexToToggle]= "keyboard_arrow_right";

  }

}
