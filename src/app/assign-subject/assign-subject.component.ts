import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material';
import { ManualassignsubjectComponent } from '../manualassignsubject/manualassignsubject.component';
import { CdrpService } from '../cdrp.service';

@Component({
  selector: 'app-assign-subject',
  templateUrl: './assign-subject.component.html',
  styleUrls: ['./assign-subject.component.css']
})
export class AssignSubjectComponent implements OnInit {
visit:any;
form:any;
field:any;
//visits=["Sceening","ALL","Medication","Checkup"];
visits=[];
forms=[];
fields=[];
datatrajectory=[];
values=[];
value:any;
subjects=[];
fieldenable:boolean;
formenable:boolean;
valueenable:boolean;
selectedVisit = "0";
selectedForm = "0";
selectedField = "0";
selectedValue = "0";
  constructor(public service: CdrpService,public dialog: MatDialog,public dialogRef: MatDialogRef<AssignSubjectComponent>) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  
    onSelectVisit(selectedValue:any)
  {
    this.visit = selectedValue;
    console.log(this.visit);
    //this.forms=["DM_SCR","DOV","DS_IC","DM"];
    for (var i = 0; i < this.visits.length; i++) {
      if (this.visits[i].visitname == selectedValue) {
          this.forms=this.visits[i].forms;
      }
  }
// this.fields=[];
  //this.values=[];
  this.formenable=false;
  this.fieldenable=true;
  this.valueenable=true;
  this.selectedForm = "0";
  this.selectedField = "0";
  this.selectedValue = "0";
  }
  


  onSelectForm(selectedValue:any)
  {
    this.form = selectedValue;
    console.log(this.form);
    for (var i = 0; i < this.forms.length; i++) {
      if (this.forms[i].formname == selectedValue) {
          this.fields=this.forms[i].field;
      }
  }
  this.fieldenable=false;
  this.valueenable=true;
  this.selectedField = "0";
  this.selectedValue = "0";
    //this.fields=["Modified SWAT","Acne conglobata","Hirsutism","Orthopnea"];
  }
  onSelectField(selectedValue:any)
  {
    this.field = selectedValue;
    console.log(this.field);
    console.log("Done");
    for (var i = 0; i < this.fields.length; i++) {
      if (this.fields[i].fieldname == selectedValue) {
          this.values=this.fields[i].values;
      }
  }
  this.valueenable=false;
  this.selectedValue = "0";
    //this.values=["John","Smith","Joe","Tim"];
  }
  onSelectValue(selectedValue:any,datatrajectoryvalue:any,id:any)
  {
    this.value = selectedValue;
    this.subjects[id]={"trajectory":datatrajectoryvalue,"value":this.value};

    //this.subjects.push({"trajectory":datatrajectoryvalue,"value":this.value});
   // console.log(this.subjects);
    

  }
  manualassign(datatrajectoryvalue:any,id:any): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width='400px';
    dialogConfig.height='550px';
   dialogConfig.data={"trajectory":datatrajectoryvalue,"idvalue":id};
    const dialogRef = this.dialog.open( ManualassignsubjectComponent,dialogConfig);
    dialogRef.beforeClosed().subscribe(result=>{
     // console.log("in parent"+result);
      if(result === 'CloseAll')
      {
     this.dialogRef.close();
      }
      }) 
  }
  addsubject(){
    console.log(this.subjects);
    this.dialogRef.close();
  }

  
  ngOnInit() {
    this.datatrajectory=["DATA TRAJECTORY 1","DATA TRAJECTORY 2","DATA TRAJECTORY 3","DATA TRAJECTORY 4"];
    this.visits=this.service.value;
    this.fieldenable=true;
    this.formenable=true;
    this.valueenable=true;
  }

}
