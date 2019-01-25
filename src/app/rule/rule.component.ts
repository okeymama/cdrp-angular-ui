import { Component, OnInit } from '@angular/core';
import { CdrpService } from '../cdrp.service';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {
description: any;
andvisible: boolean;
orvisible: boolean;
visit: any;
frequency: any;
frequencies = [];
datacategory: any;
expectation: any;
form: any;
forms = [];
field: any;
visits = [];
andvisits = [];
orvisits = [];
datacategories = [];
fields = [];
datatrajectory = [];
values = [];
anddatacategories = [];
andfields = [];
andvalues = [];
ordatacategories = [];
orfields = [];
orvalues = [];
value: any;
subjects = [];
fieldenable: boolean;
dataenable: boolean;
valueenable: boolean;
andfieldenable: boolean;
anddataenable: boolean;
andvalueenable: boolean;
orfieldenable: boolean;
ordataenable: boolean;
orvalueenable: boolean;
selectedVisit = '0';
selectedDataCategory = '0';
selectedField = '0';
selectedValue = '0';
selectedAndVisit = '0';
selectedAndDataCategory = '0';
selectedAndField = '0';
selectedAndValue = '0';
selectedOrVisit = '0';
selectedOrDataCategory = '0';
selectedOrField = '0';
selectedOrValue = '0';

  constructor(public service: CdrpService) { }
  capture(event) {
    this.description = event.target.value;
    console.log(this.description);
  }
  toggleAnd() {
    this.andvisible = !this.andvisible;
  }
  toggleOr() {
    this.orvisible = !this.orvisible;
  }
  onSelectVisit(selectedValue: any) {
    this.visit = selectedValue;
    console.log(this.visit);
    for (let i = 0; i < this.visits.length; i++) {
      if (this.visits[i].visitname === selectedValue) {
          this.datacategories = this.visits[i].forms;
      }
  }
 // this.fields=[];
  // this.values=[];
  this.dataenable = false;
  this.fieldenable = true;
  this.valueenable = true;
  this.selectedDataCategory = '0';
  this.selectedField = '0';
  this.selectedValue = '0';
  }
  onSelectDataCategory(selectedValue: any) {
    this.datacategory = selectedValue;
    console.log(this.datacategory);
    for (let i = 0; i < this.datacategories.length; i++) {
      if (this.datacategories[i].formname === selectedValue) {
          this.fields = this.datacategories[i].field;
      }
  }

  this.fieldenable = false;
  this.valueenable = true;
  this.selectedField = '0';
  this.selectedValue = '0';
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
  this.selectedValue = '0';
  }
  onSelectValue(selectedValue: any, datatrajectoryvalue: any, id: any) {
    this.value = selectedValue;
    this.subjects[id] = {'trajectory': datatrajectoryvalue, 'value': this.value};  
  }
  onSelectANDVisit(selectedValue: any) {
    console.log(this.visit);
    for (let i = 0; i < this.andvisits.length; i++) {
      if (this.andvisits[i].visitname === selectedValue) {
          this.anddatacategories = this.andvisits[i].forms;
      }
  }
  this.anddataenable = false;
  this.andfieldenable = true;
  this.andvalueenable = true;
  this.selectedAndDataCategory = '0';
  this.selectedAndField = '0';
  this.selectedAndValue = '0';
  }
  onSelectANDDataCategory(selectedValue: any) {
  //  this.datacategory = selectedValue;
    console.log(this.datacategory);
    for (let i = 0; i < this.anddatacategories.length; i++) {
      if (this.anddatacategories[i].formname === selectedValue) {
          this.andfields = this.anddatacategories[i].field;
      }
  }

  this.andfieldenable = false;
  this.andvalueenable = true;
  this.selectedAndField = '0';
  this.selectedAndValue = '0';
  }
  onSelectANDField(selectedValue: any) {
    console.log(this.field);
    console.log('Done');
    for (let i = 0; i < this.andfields.length; i++) {
      if (this.andfields[i].fieldname === selectedValue) {
          this.andvalues = this.andfields[i].values;
      }
  }
  this.andvalueenable = false;
  this.selectedAndValue = '0';
  }
  onSelectANDValue(selectedValue: any, datatrajectoryvalue: any, id: any) {
    this.value = selectedValue;
    this.subjects[id] = {'trajectory': datatrajectoryvalue, 'value': this.value};  
  }
  onSelectOrVisit(selectedValue: any) {
    console.log(this.visit);
    for (let i = 0; i < this.orvisits.length; i++) {
      if (this.orvisits[i].visitname === selectedValue) {
          this.ordatacategories = this.orvisits[i].forms;
      }
  }
  this.ordataenable = false;
  this.orfieldenable = true;
  this.orvalueenable = true;
  this.selectedOrDataCategory = '0';
  this.selectedOrField = '0';
  this.selectedOrValue = '0';
  }
  onSelectOrDataCategory(selectedValue: any) {
  //  this.datacategory = selectedValue;
    console.log(this.datacategory);
    for (let i = 0; i < this.ordatacategories.length; i++) {
      if (this.ordatacategories[i].formname === selectedValue) {
          this.orfields = this.ordatacategories[i].field;
      }
  }

  this.orfieldenable = false;
  this.orvalueenable = true;
  this.selectedOrField = '0';
  this.selectedOrValue = '0';
  }
  onSelectOrField(selectedValue: any) {
    console.log(this.field);
    console.log('Done');
    for (let i = 0; i < this.orfields.length; i++) {
      if (this.orfields[i].fieldname === selectedValue) {
          this.orvalues = this.orfields[i].values;
      }
  }
  this.orvalueenable = false;
  this.selectedOrValue = '0';
  }
  onSelectOrValue(selectedValue: any, datatrajectoryvalue: any, id: any) {
    this.value = selectedValue;
    this.subjects[id] = {'trajectory': datatrajectoryvalue, 'value': this.value};  
  }
  onSelectForm(selectedValue: any) {
    this.form = selectedValue;
    console.log(this.form);
    for (let i = 0; i < this.forms.length; i++) {
      if (this.forms[i].formname === selectedValue) {
          this.frequencies = this.forms[i].frequecy;
      }
  }
  }
  save(form) {
    console.log(form.value.selectform + form.value.selectfrequency + form.value.expectation +
      this.description + this.service.selecteddatacategory);
  }
  ngOnInit() {
    this.andvisible = false;
    this.orvisible = false;
    this.visits = this.service.value;
    this.andvisits = this.service.value;
    this.orvisits = this.service.value;
    this.forms = ['Medication', 'Treatment', 'Analysis'];
    this.frequencies = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];
    this.andfieldenable = true;
this.anddataenable = true;
this.andvalueenable = true;
this.orfieldenable = true;
this.ordataenable = true;
this.orvalueenable = true;
this.fieldenable = true;
this.dataenable = true;
this.valueenable = true;
  }

}
