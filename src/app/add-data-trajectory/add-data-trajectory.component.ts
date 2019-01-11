import { Component, OnInit,ViewChild ,ContentChild,Input, OnChanges,AfterViewInit} from '@angular/core';
import { CdrpService } from '../cdrp.service';
import {ActivatedRoute } from '../../../node_modules/@angular/router';
import { dataTrajectoryForms} from '../tableData';
import { MatSort,MatTableDataSource,MatSortable} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddFormsComponent } from '../add-forms/add-forms.component';

const dtForms:dataTrajectoryForms[]=[
  {
    "expectedDataCategory":"Vital Sign",
    "appliedVisit":"45 visits",
    "dataSource":["EDC,Covance,Other","IRT", "ePro","Covance","Central Lab","Parexel"],
    "dataTransferFrequency":["Monthly","Weekly","Daily","Hourly"],
    "criticalData":["No","Yes - Primary End Point","Yes - Second End Point","Yes - Efficacy","Yes - Safety"]
  },
  {
    "expectedDataCategory":"Informed Consent",
    "appliedVisit":"25 visits",
    "dataSource":["EDC,Covance,Other","IRT", "ePro","Covance","Central Lab","Parexel"],
    "dataTransferFrequency":["Monthly","Weekly","Daily","Hourly"],
    "criticalData":["No","Yes - Primary End Point","Yes - Second End Point","Yes - Efficacy","Yes - Safety"]
  },
  {
    "expectedDataCategory":"Physical Exam",
    "appliedVisit":"18 visits",
    "dataSource":["EDC,Covance,Other","IRT", "ePro","Covance","Central Lab","Parexel"],
    "dataTransferFrequency":["Monthly","Weekly","Daily","Hourly"],
    "criticalData":["No","Yes - Primary End Point","Yes - Second End Point","Yes - Efficacy","Yes - Safety"]
  },
  {
    "expectedDataCategory":"Dosing Related to Pharmacokin",
    "appliedVisit":"16 visits",
    "dataSource":["EDC,Covance,Other","IRT", "ePro","Covance","Central Lab","Parexel"],
    "dataTransferFrequency":["Monthly","Weekly","Daily","Hourly"],
    "criticalData":["No","Yes - Primary End Point","Yes - Second End Point","Yes - Efficacy","Yes - Safety"]
  },
  {
    "expectedDataCategory":"Imaging",
    "appliedVisit":"14 visits",
    "dataSource":["EDC,Covance,Other","IRT", "ePro","Covance","Central Lab","Parexel"],
    "dataTransferFrequency":["Monthly","Weekly","Daily","Hourly"],
    "criticalData":["No","Yes - Primary End Point","Yes - Second End Point","Yes - Efficacy","Yes - Safety"]
  },
  {
    "expectedDataCategory":"Blood Sugar",
    "appliedVisit":"11 visits",
    "dataSource":["EDC,Covance,Other","IRT", "ePro","Covance","Central Lab","Parexel"],
    "dataTransferFrequency":["Monthly","Weekly","Daily","Hourly"],
    "criticalData":["No","Yes - Primary End Point","Yes - Second End Point","Yes - Efficacy","Yes - Safety"]
  },
  {
    "expectedDataCategory":"Viral Levels",
    "appliedVisit":"  19  visits",
    "dataSource":["EDC,Covance,Other","IRT", "ePro","Covance","Central Lab","Parexel"],
    "dataTransferFrequency":["Monthly","Weekly","Daily","Hourly"],
    "criticalData":["No","Yes - Primary End Point","Yes - Second End Point","Yes - Efficacy","Yes - Safety"]
  },
  {
    "expectedDataCategory":"System testing",
    "appliedVisit":" 28  visits",
    "dataSource":["EDC,Covance,Other","IRT", "ePro","Covance","Central Lab","Parexel"],
    "dataTransferFrequency":["Monthly","Weekly","Daily","Hourly"],
    "criticalData":["No","Yes - Primary End Point","Yes - Second End Point","Yes - Efficacy","Yes - Safety"]
  },
  {
    "expectedDataCategory":"Immunity testing",
    "appliedVisit":" 13  visits",
    "dataSource":["EDC,Covance,Other","IRT", "ePro","Covance","Central Lab","Parexel"],
    "dataTransferFrequency":["Monthly","Weekly","Daily","Hourly"],
    "criticalData":["No","Yes - Primary End Point","Yes - Second End Point","Yes - Efficacy","Yes - Safety"]
  },
  {
    "expectedDataCategory":"Physical Examination",
    "appliedVisit":" 22  visits",
    "dataSource":["EDC,Covance,Other","IRT", "ePro","Covance","Central Lab","Parexel"],
    "dataTransferFrequency":["Monthly","Weekly","Daily","Hourly"],
    "criticalData":["No","Yes - Primary End Point","Yes - Second End Point","Yes - Efficacy","Yes - Safety"]
  }
]

@Component({
  selector: 'app-add-data-trajectory',
  templateUrl: './add-data-trajectory.component.html',
  styleUrls: ['./add-data-trajectory.component.css']
})

export class AddDataTrajectoryComponent implements OnInit {

  trajName;string;
  studyID: string;
  sourceVariable:string[]=[];
  frequencyVariable:string[]=[];
  criticalVariable:string[]=[];
  
  displayedColumns: string[] = ['select','expectedDataCategory','dataSource','appliedVisit','dataTransferFrequency','criticalData'];
  selection = new SelectionModel<dataTrajectoryForms>(true, []);
  dataSource = new MatTableDataSource<dataTrajectoryForms>(dtForms);
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private cdrpService: CdrpService,private activateRouter:ActivatedRoute,public dialog: MatDialog) { 
    for(var c=0;c< dtForms.length;c++)
      {
        this.sourceVariable[c] = "--select--";
        this.frequencyVariable[c] = "--select--";
        this.criticalVariable[c] = "--select--";
      } 
  }


  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.studyID = this.cdrpService.id; 
    this.trajName = this.cdrpService.TrajectoryName;   
  }

  checkBox()
  {
    console.log("click it");
  }

  onSelect(selectedValue:any, ind1, id)
  {
    console.log(selectedValue+" "+ind1+" "+id);
    if(id === 'sourceVariable')
      this.sourceVariable[ind1] = selectedValue;
    else if(id === 'frequencyVariable')
      this.frequencyVariable[ind1] = selectedValue;
    else if(id === 'criticalVariable')
      this.criticalVariable[ind1] = selectedValue;

    console.log(this.sourceVariable);
  }

  addFormsDialog(): void {
    const dialogRef = this.dialog.open(AddFormsComponent, {
      width: '400px',
      height:'450px',
      data: "here"
    });

    dialogRef.beforeClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
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
