export interface idrpPlanDetail {
    idrpPlanDetailId: Number,
    studyId: string,
    planOwner:  string,
    planVersion:  string,
    createdDate:  string,
    approvalDate:  string,
    lastModifiedBy:  string,
    dataTrajectoryDTOList: dataTrajectoryList[]
}

export interface dataTrajectoryList {
    dataTrajectoryId: Number,
    dataTrajectoryName: string,
    description: string,
    createdBy: string,
    createdDate: string,
    lastUpdatedDate: string,
    expectedDataCategoryDTOList: expectedDataCategoryList[],
    dataTrajectorySubjectAssignmentDTOList: dataTrajectorySubjectAssignmentList[]
    
}

export interface expectedDataCategoryList {
    expectedDataCategoryId: Number,
    expectedDataCategoryName: string,
    source: string,
    dataTransferFrequency: string,
    criticalData: string,
    createdBy: string,
    createdDate: string,
    lastUpdatedDate: string,
    idrpCheckDTOList: idrpCheckList[],
    appliedVisitDTOList: appliedVisitList[]

}

export interface dataTrajectorySubjectAssignmentList {
    dataTrajectorySubjectAssignmentId: Number,
    visit: string,
    form: string,
    field: string,
    fieldValue: string,
    createdBy: string,
    createdDate: string,
    lastUpdatedDate: string,
    assignedSubjectDTOList: assignedSubjectList[]
}

export interface idrpCheckList {
    idrpCheckId: Number,
    purpose: string,
    description: string,
    visit: string,
    role: string,
    method: string,
    frequency: string,
    owner: string,
    checkName: string,
    queryText: string,
    source: string,
    createdBy: string,
    createdDate: string,
    lastUpdatedDate: string
}

export interface appliedVisitList {
    appliedVisitId: Number,
    visitId: Number,
    visitName: string
}

export interface assignedSubjectList {
    assignedSubjectId: Number,
    subjectId: Number,
    createdBy: string,
    creationDate: string,
    lastUpdatedDate: string
}
