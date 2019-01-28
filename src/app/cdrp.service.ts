import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpMethod } from '../../node_modules/blocking-proxy/built/lib/webdriver_commands';
import { Headers, Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { Router} from '@angular/router';


@Injectable()
export class CdrpService {

  id: string;
  TrajectoryName: string;
  selecteddatacategory: any;
  selectedCategory = 'null';
  value = [
    {
      'visitname': 'Medication',
      'forms': [{'formname': 'DM',
        'field': [{'fieldname': 'CMROUTE',
          'values': ['Rectal', 'T-dermal']
          },
          {'fieldname': 'CC_CATEGORY',
          'values': ['Modified SWAT', 'JDA GPP Severity Index']

          }
              ]


        },
             {'formname': 'DOV',
          'field': [{'fieldname': 'CE_TERM',
            'values': ['Crohn\'s disease', 'Oral']

            },
            {'fieldname': 'CM_CATEGORY',
            'values': ['Atorvastatin', 'Erythropoietin']

            }
           ]


        }
        ]

      },
      {
      'visitname': 'Screening',
      'forms': [{'formname': 'DM_SCR',
        'field': [{'fieldname': 'CM_REASON',
          'values': ['Diabetic neuropathic pain', 'Osteoarthritis Pain of the knee']

          },
          {'fieldname': 'CM_REGIMEN_NUM',
          'values': ['Regimen02', 'Regimen03']

          }
              ]


        },
             {'formname': 'DS_IC',
          'field': [{'fieldname': 'CM_RESPONSE',
            'values': ['Stable disease', 'Progressive disease']

            },
            {'fieldname': 'CM_ROUTE',
            'values': ['Epidural', 'Dental']

            }
           ]


        }
        ]

      }

      ];
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private router: Router, private  httpClient:  HttpClient) {}

  private categoryUrl = 'https://cdrp-service.herokuapp.com/data';
  private categoryUrl1 = 'https://cdrp-service.herokuapp.com/getstudy';
  private categoryUrl2 = 'https://cdrp-service.herokuapp.com/getdetails';

  selectdatacategory(category: any) {
    this.selecteddatacategory = category;
  }
  getProducts1() {

    return this.http.request(this.categoryUrl);

  }

  setid(id) {
    this.id = id;
  }

  setSelectedCategory(cat) {
    this.selectedCategory = cat;
  }

  getSelectedCategory() {
    return this.selectedCategory;
  }

  setTrajectoryName(name) {
    this.TrajectoryName = name;
  }

  getstudy() {

    return this.http.request(this.categoryUrl1);
    }

  getdetails() {

      return this.http.request(this.categoryUrl2);
  }
  getProducts() {

    return this.http.request('https://cdrp-service.herokuapp.com/getdata?id=' + this.id);

  }

}
