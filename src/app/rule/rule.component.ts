import { Component, OnInit } from '@angular/core';
import { CdrpService } from '../cdrp.service';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {
  description:any;
  andvisible:boolean;
  orvisible:boolean;
  visit:any;
  frequency:any;
  frequencies=[];
datacategory:any;
expectation:any
form:any;
forms=[];
field:any;
//visits=["Sceening","ALL","Medication","Checkup"];
visits=[];
datacategories=[];
fields=[];
datatrajectory=[];
values=[];
value:any;
subjects=[];
fieldenable:boolean;
dataenable:boolean;
valueenable:boolean;
selectedVisit = "0";
selectedDataCategory = "0";
selectedField = "0";
selectedValue = "0";

  constructor(public service: CdrpService) { }
  capture(event){
    this.description=event.target.value;
    console.log(this.description);
  }
  toggleAnd(){
    this.andvisible=!this.andvisible;
  }
  toggleOr(){
    this.orvisible=!this.orvisible;
  }
  onSelectVisit(selectedValue:any)
  {
    this.visit = selectedValue;
    console.log(this.visit);
    //this.forms=["DM_SCR","DOV","DS_IC","DM"];
    for (var i = 0; i < this.visits.length; i++) {
      if (this.visits[i].visitname == selectedValue) {
          this.datacategories=this.visits[i].forms;
      }
  }
 // this.fields=[];
  //this.values=[];
  this.dataenable=false;
  this.fieldenable=true;
  this.valueenable=true;
  this.selectedDataCategory = "0";
  this.selectedField = "0";
  this.selectedValue = "0";
  }
  onSelectDataCategory(selectedValue:any)
  {
    this.datacategory = selectedValue;
    console.log(this.datacategory);
    for (var i = 0; i < this.datacategories.length; i++) {
      if (this.datacategories[i].formname == selectedValue) {
          this.fields=this.datacategories[i].field;
      }
  }

  this.fieldenable=false;
  this.valueenable=true;
  this.selectedField = "0";
  this.selectedValue = "0";
    //console.log(this.fields);
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
  onSelectForm(selectedValue:any){
    this.form = selectedValue;
    console.log(this.form);
    for (var i = 0; i < this.forms.length; i++) {
      if (this.forms[i].formname == selectedValue) {
          this.frequencies=this.forms[i].frequecy;
      }
  }
  }
  onSelectFrequency(selectedValue:any)
  {

  }
  onSelectionChange(selectedValue:any){
    this.expectation=selectedValue;
    console.log(this.expectation);
  }
  /*saverule(){
    console.log(this.description+this.expectation+this.service.selecteddatacategory);
  }*/
  login(form){
    console.log(form.value.selectform+form.value.selectfrequency+form.value.expectation+this.description+this.service.selectedCategory);
  }
  ngOnInit() {
    this.andvisible=false;
    this.orvisible=false;
    this.visits=this.service.value;
    this.forms=["ABC","BCD","DEF"];
    this.fieldenable=true;
    this.dataenable=true;
    this.valueenable=true;
  }

}
