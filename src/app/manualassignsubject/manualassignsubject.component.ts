import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'app-manualassignsubject',
  templateUrl: './manualassignsubject.component.html',
  styleUrls: ['./manualassignsubject.component.css']
})

export class ManualassignsubjectComponent implements OnInit, OnDestroy {
  subjects = [];
  assignedsubjects = [];
  subject: any;
  assignedsubject: any;
  removeid: any;
  searchText ='';
  constructor(public dialogRef: MatDialogRef<ManualassignsubjectComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  onNoClick(): void {
    this.dialogRef.close('CloseAll');

  }
  previousDialog(): void {

    this.dialogRef.close();
  }
  onSelect(selectedValue: any) {

    this.subject = selectedValue;
    console.log(this.subject + 'onselection');
  }
  onDeSelect(selectedValue: any) {
    this.assignedsubject = selectedValue;
    //this.removeid = id;
    console.log(this.assignedsubject + 'on deselection');

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
    Array.from(document.querySelectorAll('.cdk-overlay-container .cdk-global-overlay-wrapper'))
    .forEach((node, index, array) => (index !== array.length - 1) ? (<HTMLElement> node).style.display = 'none' : true);
    this.subjects = ['555-885', '669-653', '55-556', '88866-5'];
  }
  ngOnDestroy() {
   Array.from(document.querySelectorAll('.cdk-overlay-container .cdk-global-overlay-wrapper'))
   .forEach((node) => (<HTMLElement> node).style.display = '' );
  }

}
