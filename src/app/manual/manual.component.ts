import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {
  subjects = [];
  assignedsubjects = [];
  subject: any;
  assignedsubject: any;
  removeid: any;
  description: any;
  searchText = '';
  constructor() { }
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
    console.log(this.description + 'has assigned subjects' + this.assignedsubjects);
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
  }

}
