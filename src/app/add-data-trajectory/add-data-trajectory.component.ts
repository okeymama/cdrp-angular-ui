import { Component, OnInit } from '@angular/core';
import { CdrpService } from '../cdrp.service';
import {ActivatedRoute } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-add-data-trajectory',
  templateUrl: './add-data-trajectory.component.html',
  styleUrls: ['./add-data-trajectory.component.css']
})
export class AddDataTrajectoryComponent implements OnInit {
  
  trajName;string;
  studyID: string;
  constructor(private cdrpService: CdrpService,private activateRouter:ActivatedRoute) { }

  ngOnInit() {
    this.studyID = this.cdrpService.id; 
    this.trajName = this.cdrpService.TrajectoryName;
  }

}
