import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material';
import { ManualassignsubjectComponent } from '../manualassignsubject/manualassignsubject.component';
import { CdrpService } from '../cdrp.service';
import { AssignedSubjectList, assignedSubjectDTO, dataTrajectorySubjectAssignmentDTO } from '../ViewInterfaces';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-assign-subject',
  templateUrl: './assign-subject.component.html',
  styleUrls: ['./assign-subject.component.css']
})
export class AssignSubjectComponent implements OnInit {
visit: any;
form: any;
field: any;
visits = [];
forms = [];
fields = [];
datatrajectory = [];
values = [];
value: any;
subjects = [];
fieldenable: boolean;
formenable: boolean;
valueenable: boolean;
selectedVisit = '0';
selectedForm = '0';
selectedField = '0';
selectedValue =  [];
subid: any;
subids = [];
dataTrajectorySubjectAssignmentDTOList = [];
finaldataTrajectorySubjectAssignmentDTOList = [];
assignedSubjectDTOList = [];
assignedSubject: assignedSubjectDTO;
dataTrajectorySubjectAssignmentDTO: dataTrajectorySubjectAssignmentDTO ;

  constructor(public service: CdrpService, public dialog: MatDialog, public dialogRef: MatDialogRef<AssignSubjectComponent>) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

    onSelectVisit(selectedValue: any) {
    this.visit = selectedValue;
    console.log(this.visit);
    for (let i = 0; i < this.visits.length; i++) {
      if (this.visits[i].visitname === selectedValue) {
          this.forms = this.visits[i].forms;
      }
  }
  this.formenable = false;
  this.fieldenable = true;
  this.valueenable = true;
  this.selectedForm = '0';
  this.selectedField = '0';
  this.setDefaultValue();
  }
  onSelectForm(selectedValue: any) {
    this.form = selectedValue;
    console.log(this.form);
    for (let i = 0; i < this.forms.length; i++) {
      if (this.forms[i].formname === selectedValue) {
          this.fields = this.forms[i].field;
      }
  }
  this.fieldenable = false;
  this.valueenable = true;
  this.selectedField = '0';
  this.setDefaultValue();
  }
  onSelectField(selectedValue: any) {
    this.field = selectedValue;
    console.log(this.field);
    console.log('Done');
    for (let i = 0; i < this.fields.length; i++) {
      if (this.fields[i].fieldname === selectedValue) {
          this.values = this.fields[i].values;
      }
  }
  this.valueenable = false;
  this.setDefaultValue();
  }
  onSelectValue(selectedValue: any, datatrajectoryvalue: any, id: any) {
    this.value = selectedValue;
   // this.subjects[id] = {'trajectory': datatrajectoryvalue, 'value': this.value};
   this.dataTrajectorySubjectAssignmentDTOList[id].form = this.form;
   this.dataTrajectorySubjectAssignmentDTOList[id].visit = this.visit;
   this.dataTrajectorySubjectAssignmentDTOList[id].field = this.field;
   this.dataTrajectorySubjectAssignmentDTOList[id].fieldValue = this.value;
  }
  manualassign(id: any): void {
    this.selectedValue[id] = '0';
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    dialogConfig.height = '550px';
  // dialogConfig.data = {'trajectory': datatrajectoryvalue, 'idvalue': id};
  dialogConfig.data = id;
    const dialogRef = this.dialog.open( ManualassignsubjectComponent, dialogConfig);
    dialogRef.beforeClosed().subscribe(result => {
      this.subids = result;
      console.log(this.subids);
      if (result === 'CloseAll') {
     this.dialogRef.close();
      } else {
        this.dataTrajectorySubjectAssignmentDTOList[id].assignedSubjectDTOList = [];
          for (let j = 0 ; j < this.subids.length ; j++) {
            this.assignedSubject = {
              subjectId: this.subids[j],
              createdBy: 'John',
              creationDate: '2019-02-01',
              lastUpdatedDate: '2019-02-03',
            };
            console.log(this.assignedSubject);
            this.dataTrajectorySubjectAssignmentDTOList[id].assignedSubjectDTOList.push(this.assignedSubject);
          }
          console.log(this.dataTrajectorySubjectAssignmentDTOList);
      }
      });
  }
  addsubject() {
    const removeids = [];
  for (let i = 0 ; i < this.datatrajectory.length ; i++) {
    if (this.selectedValue[i] === '0') {
      this.dataTrajectorySubjectAssignmentDTOList[i].form = null;
      this.dataTrajectorySubjectAssignmentDTOList[i].field = null;
      this.dataTrajectorySubjectAssignmentDTOList[i].visit = null;
      this.dataTrajectorySubjectAssignmentDTOList[i].fieldValue = null;
       console.log('ROW' + i  + '  empty field values');
      if (this.dataTrajectorySubjectAssignmentDTOList[i].assignedSubjectDTOList.length !== 0) {
        this.finaldataTrajectorySubjectAssignmentDTOList.push(this.dataTrajectorySubjectAssignmentDTOList[i]);
      }
    } else {
      this.finaldataTrajectorySubjectAssignmentDTOList.push(this.dataTrajectorySubjectAssignmentDTOList[i]);
    }
   }
    console.log(this.finaldataTrajectorySubjectAssignmentDTOList);
    this.service.saveDataTrajectorySubjectAssignment(this.finaldataTrajectorySubjectAssignmentDTOList).subscribe((res: Response) => {
      console.log(res.text());
     });
   // this.service.saveDataTrajectorySubjectAssignment(this.dataTrajectorySubjectAssignmentDTOList);
     this.dialogRef.close();
  }

  setDefaultValue() {
    for (let i = 0 ; i < this.datatrajectory.length  ; i++) {
      this.selectedValue[i] = '0';
  }
}

  ngOnInit() {
   // this.datatrajectory = [' 1', '2', '3', '4'];
     this.datatrajectory = this.service.idrpData.dataTrajectoryDTOList;
    this.setDefaultValue();
    for (let i = 0 ; i < this.datatrajectory.length  ; i++) {
      this.dataTrajectorySubjectAssignmentDTO = {
        visit: null,
        form: null,
        field: null,
        fieldValue: null,
        createdBy: this.service.user,
        createdDate: '2019-02-03',
        lastUpdatedDate: '2019-02-06',
        dataTrajectoryId: this.datatrajectory[i].dataTrajectoryId,
        assignedSubjectDTOList: []
      };
        this.dataTrajectorySubjectAssignmentDTOList[i] = this.dataTrajectorySubjectAssignmentDTO;
    }
    console.log(this.dataTrajectorySubjectAssignmentDTOList);
    console.log(this.datatrajectory);
    this.visits = this.service.value;
    this.fieldenable = true;
    this.formenable = true;
    this.valueenable = true;
  }

}
