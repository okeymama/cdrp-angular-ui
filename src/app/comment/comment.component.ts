import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CdrpService } from '../cdrp.service';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  constructor(public cdrpService: CdrpService, public dialogRef: MatDialogRef<CommentComponent>) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  addcomment(form) {
    this.cdrpService.selectedExpectedDatacategory.comment = form.value.name;
    this.cdrpService.updateexpectedDataCategory(this.cdrpService.selectedExpectedDatacategory).subscribe((res: Response) => {
      console.log(res.text());
    });
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log(this.cdrpService.selectedExpectedDatacategory);
  }

}
