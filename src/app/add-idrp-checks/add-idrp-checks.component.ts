import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormData,AddData} from '../Study';
import { AddExpectedDataComponent } from '../add-expected-data/add-expected-data.component';

@Component({
    selector: 'app-add-idrp-checks',
    templateUrl: './add-idrp-checks.component.html',
    styleUrls: ['./add-idrp-checks.component.css']
  })

  export class AddIdrpChecksComponent implements OnInit {

    category:string[]=[];
    // dialogId=0;
     addData:AddData[]=[
     {
       "dataTrajectoryName":"Data Trajectory Name 001",
       "description":["Lorem ipsum dolor sit amet", "consectetur", "Lorem ipsum dolor sit amet"]
     },
     {
       "dataTrajectoryName":"Data Trajectory Name 002",
       "description":["Lorem ipsum dolor sit amet", "consectetur", "Lorem ipsum dolor sit amet"]
     },
     {
       "dataTrajectoryName":"Data Trajectory Name 003",
       "description":["Lorem ipsum dolor sit amet", "consectetur", "Lorem ipsum dolor sit amet"]
     }
     ]
     constructor(public dialog1: MatDialog,
       public dialogRef: MatDialogRef<AddIdrpChecksComponent>,
       @Inject(MAT_DIALOG_DATA) public data: FormData[]) {
         for(var c=0;c<data.length;c++)
         {
           this.category[c] = "";
         } 
       }
   
     onNoClick(): void {
       this.dialogRef.close();
     }
   
     ngOnInit()
     {
       Array.from(document.querySelectorAll(".cdk-overlay-container .cdk-global-overlay-wrapper")) .forEach((node, index, array) => (index !== array.length - 1) ? (<HTMLElement> node).style.display = "none" : true);
     }
   
     ngOnDestroy()
     {
       Array.from(document.querySelectorAll(".cdk-overlay-container .cdk-global-overlay-wrapper")) .forEach((node) =>(<HTMLElement> node).style.display = "" );
     }
   
   
     openAddExpectedDataDialog(): void {
       const dialogRef1 = this.dialog1.open(AddExpectedDataComponent, {
         width: '800px',
         height:'420px',
         data: this.addData
       });
   
       dialogRef1.beforeClosed().subscribe(result=>{
         console.log("in parent"+result);
         if(result === 'closeAll')
         {
           this.dialogRef.close('closeAll');
         }
      })
   }
   
   
   
   
     onSelect(selectedValue:any, ind1)
     {
       this.category[ind1] = selectedValue;
       console.log(this.category);
     }
   
   }