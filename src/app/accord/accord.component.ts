import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { Study } from '../Study';
import { Http , Response } from '@angular/http';
import { CdrpService } from '../cdrp.service';
import { Details } from '../Details';
import '../../../node_modules/chartjs-plugin-doughnutlabel';
import { Bardata } from '../Bardata';
import { Bar } from '../Bar';
import { IdrpPlanDetail } from '../ViewInterfaces';
@Component({
  selector: 'app-accord',
  templateUrl: './accord.component.html',
  styleUrls: ['./accord.component.css']
})
export class AccordComponent implements OnInit {
idrpPlanDetail: any;
idrpData: any;
panelOpenState = false;
count: Number;
expand: boolean[];
md: number;
tdata: Study[];
ddata: Details[];
index = 0;
d:  Bardata[];
da:  Bardata[];
b:  Bar[];
ba = [];
studyIdrpPaln = [];
public barChartOptions = {
  scalShowVerticalLines: false,
  responsive: true,
  };
public barChartData = [];
public barChartType = 'doughnut';
public barChartLabels = ['Non-Critical Data ', 'Critical Data '];
    // public barChartData=[250,150];
pieChartColor: any =  [
    {
    backgroundColor:  ['rgb(44,135,5)',
    'rgb(255,0,0)'
    ]
    }
    ];
public options1 = [];
chartOptions =  {
  responsive:  true,
  legend: {
    display: false
  },
  title:  {
    text: 'IN ACTION',
    display: true
  },
  scales:  {
    yAxes: [{
      display:  true,
    scaleLabel:  {
    display:  true,
    labelString:  'Days'
  },
    ticks: {
    beginAtZero: true
  }
  }]
}
  };

labels =  ['OverDue',  'Due in 7 Days'];
colors =  [ // CHART COLOR.
    {
    backgroundColor:  [ 'red',
    '#8B4513', ]
    },
];


  constructor(private router: Router, private http: Http, private service: CdrpService) { }
  toggle(expanded, i) {
    this.expand[i] = !expanded;
  }

  check(studyid) {
    for (let k = 0; k < this.studyIdrpPaln.length ; k++) {
      if (this.studyIdrpPaln[k] === studyid) {
        return false;
      }
    }
    return true;
  }
  ngOnInit() {
    this.service.getstudy().subscribe((res: Response) => {
       this.tdata = res.json();
       console.log(this.tdata);
       this.count = this.tdata.length;
      /* for (let i = 0; i < this.count; i++) {
           this.expand.push(false);
       }*/
    });
    this.service.getIdrpPlans().subscribe((res: Response) => {
      this.idrpData = res.json();
      console.log(this.idrpData);
      console.log('helo');
      for ( let i = 0 ; i < this.idrpData.length ; i++) {
          this.studyIdrpPaln.push(this.idrpData[i].studyId);
      }
      console.log(this.studyIdrpPaln);
      // console.log(this.idrpData.studyId);
     // console.log(res);
   });

    this.service.getdetails().subscribe((res: Response) => {
       this.ddata = res.json();
       this.count = this.ddata.length;
      for (let c = 0;  c < this.count; c++) {
        this.barChartData[c] = [this.ddata[c].noncritical, this.ddata[c].critical];
        // tslint:disable-next-line:radix
        this.md = parseInt(this.ddata[c].noncritical) + parseInt(this.ddata[c].critical);
console.log(this.barChartData[c]);
this.options1[c] = {
title: {
display:  true,
text:  'MISSING DATA',
position:  'top',
font:  {
size:  '20'
}
},
legend:  {
display:  true,
position:  'bottom',
},
plugins:  {
doughnutlabel:  {
labels:  [
{
text:  'Missing Data',
font:  {
size:  '50'
}
},
{
text:  this.md,
font:  {
size:  '80'
},
color:  'grey'
}, ]
}
}
};
}


      for (let c = 0;  c < this.count; c++) {
        this.da = [{data: [this.ddata[c].due, this.ddata[c].overdue]}];
        console.log(this.da);
        this.ba[c] = {chartData: this.da};
        }
       console.log(this.ddata);
    });
  }

  navigate(studyid) {
    console.log(studyid);
    this.service.setid(studyid);
    this.idrpPlanDetail = {
      'studyId': studyid,
      'planOwner':  this.service.user,
      'planVersion': 'Version 1:Draft'
    };
    console.log(this.idrpPlanDetail);
   this.service.addIdrpPlan(this.idrpPlanDetail).subscribe((res: Response) => {
      console.log(res.text());
      this.router.navigate(['nav']);
    });
    // this.service.addIdrpPlan(this.idrpPlanDetail);
   // this.router.navigate(['nav']);
  }

  redirect(id) {
    console.log(id);
    this.service.setid(id);
    this.router.navigate(['nav']);
  }

}
