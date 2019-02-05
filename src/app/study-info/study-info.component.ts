import { Component, OnInit } from '@angular/core';
import { Tdata } from '../tableData';
import { Http, Response } from '@angular/http';
import { Reference } from '../tableData';
import { StudyInfo } from '../tableData';
import { CdrpService } from '../cdrp.service';

@Component({
  selector: 'app-study-info',
  templateUrl: './study-info.component.html',
  styleUrls: ['./study-info.component.css']
})
export class StudyInfoComponent implements OnInit {

  index = 0;
  currentPage: String = '';
  tdata: Tdata[] = [
    { 'event': 'FSS',
      'planned': 'auto populated',
      'actual': 'auto populated'
    },
    { 'event': 'FSFV',
      'planned': 'auto populated',
      'actual': 'auto populated'
    },
    { 'event': 'LSLV',
      'planned': 'auto populated',
      'actual': 'auto populated'
    },
    { 'event': 'Database Lock',
      'planned': 'auto populated',
      'actual': 'auto populated'
    },
    { 'event': 'CSR',
      'planned': 'auto populated',
      'actual': 'auto populated'
    }
];

  data: any;

  constructor(private http: Http, private cdrpService: CdrpService) { }

  ngOnInit() {
    this.data = null;
    console.log('in here:');
    this.cdrpService.getProducts().subscribe((res: Response) => {
       this.data = res.json();
       this.cdrpService.setIdrpPlanId(this.data.idrp.idrpPlanDetailId);
       console.log(this.cdrpService.idrpPlanId);
       console.log(res);
    });
  }

}
