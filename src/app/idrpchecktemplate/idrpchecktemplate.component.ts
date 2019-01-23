import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idrpchecktemplate',
  templateUrl: './idrpchecktemplate.component.html',
  styleUrls: ['./idrpchecktemplate.component.css']
})
export class IdrpchecktemplateComponent implements OnInit {
public template = [
  {
    'templatename': 'Template 1',
    'description': 'Review for duplicate visits (same date different visit name) in EDC',
    'TA': 'Lorem ipsum dolor sit amet, consectetur',
    'Compound': 'Lorem ipsum',
    'Indication': 'Lorem ipsum'
  }, {
    'templatename': 'Template 2',
    'description': 'Review for appropriate protocol adherence, sequence of events and logic.  If an unscheduled visit occurs, check for any time-associated procedures (i.e. AEs, pregnancy, ECG, CXR) or entered in error query site to correct.',
    'TA': 'Lorem ipsum dolor sit amet, consectetur',
    'Compound': 'Lorem ipsum',
    'Indication': 'Lorem ipsum'
  }
];
Ta = [];
Compound = [];
Indication = [];
selectedTa = [];
selectedComp = [];
selectedIndi = [];
dropdownSettings = {};
  constructor() { }
  public showtemplate(tempalte: any) {
    console.log(tempalte);
  }
  public search(form) {
    console.log(form.value.tempname);
    this.template = [
      {
        'templatename': 'Template 4',
        'description': 'Review dates against the protocol defined windows and for logic',
        'TA': 'Lorem ipsum dolor sit amet, consectetur',
        'Compound': 'Lorem ipsum',
        'Indication': 'Lorem ipsum'
      }
    ];
}
onTaSelect(item: any) {
  // this.selectedItems.push(item);
  console.log(this.selectedTa);
}
onTaDeSelect(item: any) {
  console.log(this.selectedTa);
}
onTaSelectAll(items: any) {
  this.selectedTa = [];
  this.selectedTa = items;
  console.log(this.selectedTa);
}
onTaDeSelectAll(items: any) {
  this.selectedTa = [];
  console.log(this.selectedTa);
}
onCompoundSelect(item: any) {
  // this.selectedItems.push(item);
  console.log(this.selectedComp);
}
onCompoundDeSelect(item: any) {
  console.log(this.selectedComp);
}
onCompoundSelectAll(items: any) {
  this.selectedComp = [];
  this.selectedComp = items;
  console.log(this.selectedComp);
}
onCompoundDeSelectAll(items: any) {
  this.selectedComp = [];
  console.log(this.selectedComp);
}
onIndicationSelect(item: any) {
  // this.selectedItems.push(item);
  console.log(this.selectedIndi);
}
onIndicationDeSelect(item: any) {
  console.log(this.selectedIndi);
}
onIndicationSelectAll(items: any) {
  this.selectedIndi = [];
  this.selectedIndi = items;
  console.log(this.selectedIndi);
}
onIndicationDeSelectAll(items: any) {
  this.selectedIndi = [];
  console.log(this.selectedIndi);
}
removefilters() {
  this.selectedTa = [];
  this.selectedComp = [];
  this.selectedIndi = [];
}
 ngOnInit() {
    this.Ta = [
      { item_id: 1, item_text: 'TA1' },
      { item_id: 2, item_text: 'TA2' },
      { item_id: 3, item_text: 'TA3' },
      { item_id: 4, item_text: 'TA4' },
      { item_id: 5, item_text: 'TA5' }
    ];
    this.Compound = [
      { item_id: 1, item_text: 'Comp1' },
      { item_id: 2, item_text: 'Comp2' },
      { item_id: 3, item_text: 'Comp3' },
      { item_id: 4, item_text: 'Comp4' },
      { item_id: 5, item_text: 'Comp5' }
    ];
    this.Indication = [
      { item_id: 1, item_text: 'Indi1' },
      { item_id: 2, item_text: 'Indi2' },
      { item_id: 3, item_text: 'Indi3' },
      { item_id: 4, item_text: 'Indi4' },
      { item_id: 5, item_text: 'Indi5' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true,
      maxHeight: 80,
      searchPlaceholderText: 'Search TA'
    };
  }

}
