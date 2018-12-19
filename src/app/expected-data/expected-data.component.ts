import { Component, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';
import { CdrpService } from '../cdrp.service';

@Component({
  selector: 'app-expected-data',
  templateUrl: './expected-data.component.html',
  styleUrls: ['./expected-data.component.css']
})
export class ExpectedDataComponent implements OnInit {

  studyID: string;
  constructor(private cdrpService: CdrpService) { }

  ngOnInit() {
   this.studyID = this.cdrpService.id;
  
  }



}
