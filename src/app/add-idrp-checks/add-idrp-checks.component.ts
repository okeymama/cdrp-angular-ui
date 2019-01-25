import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
    selector: 'app-add-idrp-checks',
    templateUrl: './add-idrp-checks.component.html',
    styleUrls: ['./add-idrp-checks.component.css']
  })

  export class AddIdrpChecksComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<AddIdrpChecksComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }
  onNoClick(): void {
    this.dialogRef.close('closeAll');
  }
  ngOnInit() {
  }
}

