export interface Tdata {
        event: string;
        planned: string;
        actual: string;
      }

export interface StudyInfo {
      studyId: string;
      reference: Reference;
      key: Tdata;
      personalAssign: PAssignment;
      idrp: IdrpPlan;
      }

export interface Reference {
      theraputicArea: String ;
      compound: String;
      indication: String;
      fullProtocaltitle: String ;
      studyStatus: String ;
      studyPhase: String ;
      studyType: String ;
        }

export interface PAssignment {
      clinicalDataReviewer: String ;
      clinicalSafetyAnalyst: String;
      remoteMonitor: String;
      stats: String ;
      studyProjectManager: String ;
      studyManagerAssociate: String ;
      taMd: String ;
      dataSciencesProjectLead: String;
        }

export interface IdrpPlan {
      planOwner: string;
      planVersion: Reference;
      createdDate: Tdata;
      lastModified: string;
      approvalDate: Reference;
            }

// tslint:disable-next-line:class-name
export interface dataTrajectory {
      expectedData: string;
      appliedVisit: String;
      source: string;
      dataTransfer: string;
      criticalData: string;
}

// tslint:disable-next-line:class-name
export interface dataTrajectoryForms {
      expectedDataCategory: string;
      appliedVisit: applicableVisit;
      dataSource: string[];
      dataTransferFrequency: string[];
      criticalData: string[];
}

// tslint:disable-next-line:class-name
export interface applicableVisit {
      noOfVisits: number;
      visits: visitSource;
}

// tslint:disable-next-line:class-name
export interface visitSource {
      raveEdc: string[];
      mdr: string[];
}

// tslint:disable-next-line:class-name
export interface expectedData {
      expectedDataCategory: string;
      appliedDataTrajectory: String;
      appliedVisit: string;
      source: string;
      dataTransferFrequency: string;
      criticalData: string;
}

// tslint:disable-next-line:class-name
export interface checks {
      category: string;
      purpose: string;
      description: string;
      visit: string;
      role: string;
      method: string;
      frequency: string;
      owner: string;
      checkName: string;
      queryText: string;
      source: string;
}

export interface Idrpchecks {
      id: any;
      hcErr: any;
      hcLastop: any;
      applicableCompoundC: any;
      applicableDataCategoryC: any;
      applicableIndicationC: any;
      applicablePhaseC: any;
      applicableTaC: any;
      descriptionC: any;
      frequencyC: any;
      lastactivitydate: any;
      lastreferenceddate: any;
      lastvieweddate: any;
      methodC: any;
      ownerid: any;
      purposeC: any;
      recordtypeid: any;
      roleC: any;
      statusC: any;
      therapeuticAreaC: any;
      isdeleted: any;
      lastmodifiedbyid: any;
      lastmodifieddate: any;
      createdbyid: any;
      createddate: any;
      name: any;
      sfid: any;
      systemmodstamp: any;
}
export interface Trajectory {
      content1: dataTrajectory[];
      content2: checks[];
}
