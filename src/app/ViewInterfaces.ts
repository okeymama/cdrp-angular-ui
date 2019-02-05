export interface IdrpPlanDetail {
    idrpPlanDetailId: Number;
    studyId: string;
    planOwner:  string;
    planVersion:  string;
    createdDate:  string;
    approvalDate:  string;
    lastModifiedBy:  string;
    dataTrajectoryDTOList: DataTrajectoryList[];
}

export interface DataTrajectoryList {
    dataTrajectoryId: Number;
    dataTrajectoryName: string;
    description: string;
    createdBy: string;
    createdDate: string;
    lastUpdatedDate: string;
    expectedDataCategoryDTOList: ExpectedDataCategoryList[];
    dataTrajectorySubjectAssignmentDTOList: DataTrajectorySubjectAssignmentList[];

}

export interface ExpectedDataCategoryList {
    expectedDataCategoryId: Number;
    expectedDataCategoryName: string;
    source: string;
    dataTransferFrequency: string;
    criticalData: string;
    createdBy: string;
    createdDate: string;
    lastUpdatedDate: string;
    idrpCheckDTOList: IdrpCheckList[];
    appliedVisitDTOList: AppliedVisitList[];

}

export interface DataTrajectorySubjectAssignmentList {
    dataTrajectorySubjectAssignmentId: Number;
    visit: string;
    form: string;
    field: string;
    fieldValue: string;
    createdBy: string;
    createdDate: string;
    lastUpdatedDate: string;
    assignedSubjectDTOList: AssignedSubjectList[];
}

export interface IdrpCheckList {
    idrpCheckId: Number;
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
    createdBy: string;
    createdDate: string;
    lastUpdatedDate: string;
}

export interface AppliedVisitList {
    appliedVisitId: Number;
    visitId: Number;
    visitName: string;
}

export interface AssignedSubjectList {
    assignedSubjectId: Number;
    subjectId: Number;
    createdBy: string;
    creationDate: string;
    lastUpdatedDate: string;
}
export interface ruleassignedSubject {
    subjectId: string;
    createdBy: string;
    creationDate: string;
    lastUpdatedDate: string;
    expectedDataCategoryId: any;
}

export interface buisnessrule {
    subjectDescription: string;
    form: string;
    expected: boolean;
    frequency: string;
    createdBy: string;
    creationDate: any;
    lastUpdatedDate: any;
    expectedDataCategoryId: any;
    businessRuleConditionDTOList: any[];
}

export interface buisnessrulecondition {
    visit: string;
    form: string;
    field: string;
    fieldValue: string;
    type: string;
    createdBy: string;
    createdDate: any;
    lastUpdatedDate: any;

}

export interface dataTrajectorySubjectAssignmentDTO{
    visit: string;
    form: string;
    field: string;
    fieldValue: string;
    createdBy: string;
    createdDate: any;
    lastUpdatedDate: any;
    dataTrajectoryId: any;
    assignedSubjectDTOList: any[];
}

export interface assignedSubjectDTO{
    subjectId: String;
    createdBy: string;
    creationDate: any;
    lastUpdatedDate: any;
}
