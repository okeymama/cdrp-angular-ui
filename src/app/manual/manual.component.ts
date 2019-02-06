import { Component, OnInit } from '@angular/core';
import { ruleassignedSubject } from '../ViewInterfaces';
import { CdrpService } from '../cdrp.service';
import { Http, Response } from '@angular/http';
import { MatDialogRef } from '@angular/material';
import { BuisnessruleComponent } from '../buisnessrule/buisnessrule.component';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {
  subjects = [];
  subjectDTOlist = [];
  dataTrajectorySubjectAssignmentList = [];
  assignedsubjects = [];
  subject: any;
  assignedsubject: any;
  // removeid: any;
  description: any;
  searchText = '';
  ruleassignedSubject: ruleassignedSubject;
  ruleList = [];
  constructor(public cdrpservice: CdrpService, public dialogRef: MatDialogRef<BuisnessruleComponent>) { }
  onSelect(selectedValue: any) {

    this.subject = selectedValue;
    console.log(this.subject + 'onselection');
  }
  onDeSelect(selectedValue: any) {
    this.assignedsubject = selectedValue;
  //  this.removeid = id;
    console.log(this.assignedsubject + 'on deselection');

  }
  save() {
    for (let i = 0; i < this.assignedsubjects.length; i++) {
      this.ruleassignedSubject = {
        subjectId: this.assignedsubjects[i],
        createdBy: 'John',
        creationDate: '2019-02-01',
        lastUpdatedDate: '2019-02-03',
        expectedDataCategoryId: this.cdrpservice.selectedExpectedDatacategory.expectedDataCategoryId
      };
      this.ruleList.push(this.ruleassignedSubject);
      console.log(this.ruleassignedSubject);
    }
    console.log(this.ruleList);
    this.cdrpservice.addruleassignedsubject(this.ruleList).subscribe((res: Response) => {
      console.log(res.text());
    });
   // this.cdrpservice.addruleassignedsubject(this.ruleList);
    // console.log(this.description + 'has assigned subjects' + this.assignedsubjects);
    this.dialogRef.close();
  }
  capture(event) {
    this.description = event.target.value;
    console.log(this.description);
  }
  move() {
    if (this.subject !== '') {
    this.assignedsubjects.push(this.subject);
    console.log(this.subject + 'on moving');
    this.subject = '';
    }
  }
  back() {
    const index: number = this.assignedsubjects.indexOf(this.assignedsubject);
    if (index !== -1) {
        this.assignedsubjects.splice(index, 1);
    }
  }
  ngOnInit() {
    this.subjects = ['555-885', '669-653', '55-556', '88866-5'];
    /*for ( let i = 0 ; i < this.cdrpservice.idrpData.dataTrajectoryDTOList.length ; i ++) {
      // tslint:disable-next-line:max-line-length
      if (this.cdrpservice.idrpData.dataTrajectoryDTOList[i].dataTrajectoryId === this.cdrpservice.selectedExpectedDatacategory.dataTrajectoryId) {
        // tslint:disable-next-line:max-line-length
        this.dataTrajectorySubjectAssignmentList = this.cdrpservice.idrpData.dataTrajectoryDTOList[i].dataTrajectorySubjectAssignmentDTOList;
        for (let k = 0 ; k < this.dataTrajectorySubjectAssignmentList.length ; k++ ) {
          if ( this.dataTrajectorySubjectAssignmentList[k].form === null) {
            this.subjectDTOlist = this.dataTrajectorySubjectAssignmentList[k].assignedSubjectDTOList;
            for (let j = 0 ; j < this.subjectDTOlist.length ; j ++) {
              console.log(this.subjectDTOlist[j].subjectId);
              this.subjects.push(this.subjectDTOlist[j].subjectId);
          }
          }
        }
      }

    }*/
    console.log(this.subjects);
  }

}
