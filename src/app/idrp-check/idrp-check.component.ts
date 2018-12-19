import { Component, OnInit } from '@angular/core';
import { Tdata,checks,expectedData} from '../tableData';

@Component({
  selector: 'app-idrp-check',
  templateUrl: './idrp-check.component.html',
  styleUrls: ['./idrp-check.component.css']
})
export class IdrpCheckComponent implements OnInit {

  panelState:boolean[];
  ed:expectedData[]=[
    {
      "expectedDataCategory":"Vital sign",
      "appliedDataTrajectory":"DATA TRAJECTORY 1, DATA TRAJECTORY 2",
      "appliedVisit":"All",
      "source":"EDC",
      "dataTransferFrequency":"",
      "criticalData":"Yes - Primary End Point"
    },
    {
      "expectedDataCategory":"Swollen and Tender Joint Counts-Right",
      "appliedDataTrajectory":" ",
      "appliedVisit":"Screening",
      "source":"EDC",
      "dataTransferFrequency":"",
      "criticalData":"Yes - Additional End Point"
    },
    {
      "expectedDataCategory":"Morning Stiffness",
      "appliedDataTrajectory":"DATA TRAJECTORY 1",
      "appliedVisit":"Screening, Week 2",
      "source":"EDC, Central Lab",
      "dataTransferFrequency":"",
      "criticalData":"No"
    },
  ]
  

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

arrow:string[];

  constructor() { 
   // panelState=boolean[];
   /* this.dt.forEach(obj => {
      this.panelState.push(false);
    })*/
    this.panelState=new Array(this.ed.length).fill(false);
    this.arrow=new Array(this.ed.length).fill("keyboard_arrow_right");
  }

  ngOnInit() {
  }

  togglePanel(indexToToggle)
  {
    if(this.arrow[indexToToggle] == "keyboard_arrow_right")
        this.arrow[indexToToggle] = "keyboard_arrow_down";
    else
        this.arrow[indexToToggle]= "keyboard_arrow_right";

    this.panelState[indexToToggle] = !this.panelState[indexToToggle];
    console.log(indexToToggle);
   /* var x = document.getElementById("0");
    console.log(x);
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }*/
}
  
}
