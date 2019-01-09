import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment:string;
  id:string;
  constructor(public dialogRef: MatDialogRef<CommentComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  addcomment(form){
    this.id=this.data;
    this.comment=form.value.name;
    console.log(this.comment);
    console.log(this.id);
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
