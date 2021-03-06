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
  user = 'John Smith';
  id: string;
  newtrajectoryName: string;
  newtrajectoryDescription: string;
  selecteddatacategory: any;
  selectedCategory = 'null';
  selectedTrajectory;
  idrpPlanId: any;
  idrpData;
  newTrajectoryName;
  newTrajectoryDescription;
  selectedExpectedCategoryId;
  edId;
  idrpChecksObject;
  idrpTemplate:  any;
  mainObject;
  mappingList;
  selectedExpectedDatacategory: any = {
    'expectedDataCategoryId': null,
    'expectedDataCategoryName': null,
    'source': null,
    'dataTransferFrequency': null,
    'criticalData': null,
    'createdBy': null,
    'createdDate': null,
    'lastUpdatedDate': null,
    'comment': null,
    'dataTrajectoryId': null,
  };
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
  private getIdrpPlanDetailByIdUrl = 'https://cdrp-service.herokuapp.com/ExpectedDataPageController/getIdrpPlanDetailByIds';
  private saveNewTrajectoryUrl = 'https://cdrp-service.herokuapp.com/AddDataTrajectoryPageController/saveNewDataTrajectoryDTO';
  private saveIdrpChecksUrl = 'https://cdrp-service.herokuapp.com/ExpectedDataPageController/saveIDRPCheckDTOList';
  private updateExpectedDatacategoryUrl = 'https://cdrp-service.herokuapp.com/ExpectedDataPageController/updateExpectedDataCategory';
  private saveRuleAssignedSubjectUrl = 'https://cdrp-service.herokuapp.com/RuleAssignedSubjectController/saveRuleAssignedSubjectDTOList';
  private saveBusinessRuleUrl = 'https://cdrp-service.herokuapp.com/ExpectedDataPageController/saveBuisnessRule';
  // tslint:disable-next-line:max-line-length
  private saveDataTrajectorySubejctAssignment = 'https://cdrp-service.herokuapp.com/DataTrajectorySubjectAssignmentController/saveDataTrajectorySubjectAssignmentDTOList';
  private saveIdrpPlan = 'https://cdrp-service.herokuapp.com/LandingPageController/addIdRPPlanDetail';
  private deleteTrajectoryUrl = 'https://cdrp-service.herokuapp.com/DataTrajectoryController/deleteDataTrajectoryDTO';
  private getIdrptemplate = 'https://salesforce-db-service.herokuapp.com/IDRPCheckTemplateController/getAllIDRPCheckTemplates';

  getIdrpPlanId() {
    return this.idrpPlanId;
  }

  setIdrpPlanId(id) {
    this.idrpPlanId = id;
  }

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

  getstudy() {

    return this.http.request(this.categoryUrl1);
    }

  getdetails() {

      return this.http.request(this.categoryUrl2);
  }
  getProducts() {

    return this.http.request('https://cdrp-service.herokuapp.com/StudyInfoController/getStudyInfo?studyId=' + this.id);

  }

  getIdrpPlanDetailById() {
    console.log(this.getIdrpPlanId());
    return this.httpClient.post(this.getIdrpPlanDetailByIdUrl, this.idrpPlanId);
  }

  setIdrpData(data) {
    this.idrpData = data;
  }

  getIdrpData() {
    return this.idrpData;
  }
  getIdrpTemplate() {
    return this.http.request(this.getIdrptemplate);
  }

  setSelectedMapping(list) {
    this.mappingList = list;
  }

  getSelectedMapping() {
    return this.mappingList;
  }

  setNewTrajectoryData(name, description) {
    console.log('in service ' + name + ' ' + description);
    this.newTrajectoryName = name;
    this.newTrajectoryDescription = description;
  }

  getNewTrajectoryName() {
    return this.newTrajectoryName;
  }
  getNewTrajectoryDescription() {
    return this.newTrajectoryDescription;
  }

  saveNewTrajectory(trajectoryData) {
    console.log('In service');
    console.log(trajectoryData);
    return this.http.post(this.saveNewTrajectoryUrl, trajectoryData);
  }

  setSelectedExpectedCategoryId(id) {
    this.selectedExpectedCategoryId = id;
  }

  setDtId(id) {
    this.selectedTrajectory = id;
  }

  getDtId() {
    return this.selectedTrajectory;
  }
  setEdId(id) {
    this.edId = id;
  }

  getEdId() {
    return this.edId;
  }

  getSelectedExpectedCategoryId() {
    return this.selectedExpectedCategoryId;
  }

  saveIdrpChecks(idrpChecks) {
    console.log('In service checks');
   // console.log(idrpChecks);
    this.idrpChecksObject = idrpChecks;
    const traj = this.getDtId();
    const ed = this.getEdId();
   // console.log('traj= ' + traj + ' ed= ' + ed);
    for (let x = 0; x < idrpChecks.length; x++) {
    //  console.log(idrpChecks[x]);
    //  console.log(this.idrpChecksObject);
    //  console.log(this.mainObject.dataTrajectoryDTOList[traj].expectedDataCategoryDTOList[ed].idrpCheckDTOList);
      if (this.mainObject.dataTrajectoryDTOList[traj].expectedDataCategoryDTOList[ed].idrpCheckDTOList === null ) {
     //   console.log("in if ");
        this.mainObject.dataTrajectoryDTOList[traj].expectedDataCategoryDTOList[ed].idrpCheckDTOList = [];
    //    console.log(this.mainObject.dataTrajectoryDTOList[traj].expectedDataCategoryDTOList[ed].idrpCheckDTOList);
        this.mainObject.dataTrajectoryDTOList[traj].expectedDataCategoryDTOList[ed].idrpCheckDTOList.push(this.idrpChecksObject[x]);
      } else {
     //   console.log("in else ");
      this.mainObject.dataTrajectoryDTOList[traj].expectedDataCategoryDTOList[ed].idrpCheckDTOList.push(this.idrpChecksObject[x]);
      // this.mainObject.dataTrajectoryDTOList[traj].expectedDataCategoryDTOList[ed].idrpCheckDTOList[]
      }
    }
    console.log(this.mainObject.dataTrajectoryDTOList[traj].expectedDataCategoryDTOList[ed]);
   // this.mainObject.dataTrajectoryDTOList.expectedDataCategoryDTOList[i].idrpChecks
    return this.http.post(this.saveIdrpChecksUrl, idrpChecks);
  }

  setCopyOfData (data) {
    this.mainObject = data;
  }

  getIdrpPlans() {
    return this.http.request('https://cdrp-service.herokuapp.com/IDRPPlanDetailController/getAllIDRPPlanDetailDTO');
  }
  deleteExpectedDataCategory(expectedDataCategoryId) {
    // tslint:disable-next-line:max-line-length
    return this.http.request('https://cdrp-service.herokuapp.com/ExpectedDataPageController/deleteExpectedDataCategory?expectedDataCategoryId=' + expectedDataCategoryId);
  }

  addIdrpPlan(idrpplaindetail) {
    return this.http.post(this.saveIdrpPlan, idrpplaindetail);
  }
  updateexpectedDataCategory(updateddata) {
    console.log(updateddata);
    return this.http.post(this.updateExpectedDatacategoryUrl, updateddata);
  }

  deleteDataTrajectory(TrajectoryList) {
    return this.http.post(this.deleteTrajectoryUrl, TrajectoryList);
  }
  saveDataTrajectorySubjectAssignment(subjectassignment) {
   console.log(subjectassignment);
     return this.http.post(this.saveDataTrajectorySubejctAssignment, subjectassignment);
  }
  saveBuisnessRule(buisnessRule) {
    return this.http.post(this.saveBusinessRuleUrl, buisnessRule);
  }

  addruleassignedsubject(ruleassignedsubjectList) {
    console.log(ruleassignedsubjectList);
    return this.http.post(this.saveRuleAssignedSubjectUrl, ruleassignedsubjectList);
  }
  setselectedexpectedDataCtegory(dataTrajectoryRowId, expectedDataCategoryRowId, idrpdata) {
    this.idrpData = idrpdata;
    console.log(this.idrpData);
    // tslint:disable-next-line:max-line-length
    this.selectedExpectedDatacategory.dataTrajectoryId = this.idrpData.dataTrajectoryDTOList[dataTrajectoryRowId].dataTrajectoryId;
    // tslint:disable-next-line:max-line-length
    this.selectedExpectedDatacategory.expectedDataCategoryId = this.idrpData.dataTrajectoryDTOList[dataTrajectoryRowId].expectedDataCategoryDTOList[expectedDataCategoryRowId].expectedDataCategoryId;
    // tslint:disable-next-line:max-line-length
    this.selectedExpectedDatacategory.expectedDataCategoryName = this.idrpData.dataTrajectoryDTOList[dataTrajectoryRowId].expectedDataCategoryDTOList[expectedDataCategoryRowId].expectedDataCategoryName;
    // tslint:disable-next-line:max-line-length
    this.selectedExpectedDatacategory.source = this.idrpData.dataTrajectoryDTOList[dataTrajectoryRowId].expectedDataCategoryDTOList[expectedDataCategoryRowId].source;
    // tslint:disable-next-line:max-line-length
    this.selectedExpectedDatacategory.criticalData = this.idrpData.dataTrajectoryDTOList[dataTrajectoryRowId].expectedDataCategoryDTOList[expectedDataCategoryRowId].criticalData;
    // tslint:disable-next-line:max-line-length
    this.selectedExpectedDatacategory.createdBy = this.idrpData.dataTrajectoryDTOList[dataTrajectoryRowId].expectedDataCategoryDTOList[expectedDataCategoryRowId].createdBy;
    // tslint:disable-next-line:max-line-length
    this.selectedExpectedDatacategory.lastUpdatedDate = this.idrpData.dataTrajectoryDTOList[dataTrajectoryRowId].expectedDataCategoryDTOList[expectedDataCategoryRowId].lastUpdatedDate;
    // tslint:disable-next-line:max-line-length
    this.selectedExpectedDatacategory.createdDate = this.idrpData.dataTrajectoryDTOList[dataTrajectoryRowId].expectedDataCategoryDTOList[expectedDataCategoryRowId].createdDate;
    // tslint:disable-next-line:max-line-length
    this.selectedExpectedDatacategory.dataTransferFrequency = this.idrpData.dataTrajectoryDTOList[dataTrajectoryRowId].expectedDataCategoryDTOList[expectedDataCategoryRowId].dataTransferFrequency;
    // tslint:disable-next-line:max-line-length
    this.selectedExpectedDatacategory.comment  = this.idrpData.dataTrajectoryDTOList[dataTrajectoryRowId].expectedDataCategoryDTOList[expectedDataCategoryRowId].comment;
  console.log(this.selectedExpectedDatacategory);
}
}
