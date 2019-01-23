import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-buisnessrule',
  templateUrl: './buisnessrule.component.html',
  styleUrls: ['./buisnessrule.component.css']
})
export class BuisnessruleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BuisnessruleComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
