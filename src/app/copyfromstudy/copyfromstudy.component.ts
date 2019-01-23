import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyfromstudy',
  templateUrl: './copyfromstudy.component.html',
  styleUrls: ['./copyfromstudy.component.css']
})
export class CopyfromstudyComponent implements OnInit {
  public template = [
    {
      'studynumber': 'M45-945',
      'TA': 'Lorem ipsum dolor sit amet, consectetur',
      'Compound': 'Lorem ipsum',
      'Indication': 'Lorem ipsum'
    }, {
      'studynumber': 'M45-390',
      'TA': 'Lorem ipsum dolor sit amet, consectetur',
      'Compound': 'Lorem ipsum',
      'Indication': 'Lorem ipsum'
    }
  ];
public Ta = [];
public Compound = [];
public Indication = [];
public selectedTa = [];
public selectedComp = [];
public selectedIndi = [];
public dropdownSettings = {};
  constructor() { }
  public showstudy(study: any) {
    console.log(study);
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
