"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarSourceData1 = void 0;
var BarSourceData1 = (function () {
    function BarSourceData1() {
    }
    BarSourceData1.getAttributeTypeMap = function () {
        return BarSourceData1.attributeTypeMap;
    };
    BarSourceData1.discriminator = undefined;
    BarSourceData1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "administrativeActionsArray",
            "baseName": "administrativeActionsArray",
            "type": "Array<BarSourceData1AdministrativeActionsArrayInner>",
            "format": ""
        },
        {
            "name": "admissionType",
            "baseName": "admissionType",
            "type": "string",
            "format": ""
        },
        {
            "name": "appellateCourtDistrict",
            "baseName": "appellateCourtDistrict",
            "type": "string",
            "format": ""
        },
        {
            "name": "appellateDivisionDepartment",
            "baseName": "appellateDivisionDepartment",
            "type": "string",
            "format": ""
        },
        {
            "name": "attorneyGroup",
            "baseName": "attorneyGroup",
            "type": "string",
            "format": ""
        },
        {
            "name": "authorized",
            "baseName": "authorized",
            "type": "string",
            "format": ""
        },
        {
            "name": "barServiceClass",
            "baseName": "barServiceClass",
            "type": "string",
            "format": ""
        },
        {
            "name": "bio",
            "baseName": "bio",
            "type": "string",
            "format": ""
        },
        {
            "name": "boardCertificationsArray",
            "baseName": "boardCertificationsArray",
            "type": "Array<BarSourceData1BoardCertificationsArrayInner>",
            "format": ""
        },
        {
            "name": "boardDistrict",
            "baseName": "boardDistrict",
            "type": "string",
            "format": ""
        },
        {
            "name": "circuit",
            "baseName": "circuit",
            "type": "string",
            "format": ""
        },
        {
            "name": "comments",
            "baseName": "comments",
            "type": "string",
            "format": ""
        },
        {
            "name": "committeesArray",
            "baseName": "committeesArray",
            "type": "Array<BarSourceData1CommitteesArrayInner>",
            "format": ""
        },
        {
            "name": "courtHistoryArray",
            "baseName": "courtHistoryArray",
            "type": "Array<BarSourceData1CourtHistoryArrayInner>",
            "format": ""
        },
        {
            "name": "courtOfAdmissions",
            "baseName": "courtOfAdmissions",
            "type": "BarSourceData1CourtOfAdmissions",
            "format": ""
        },
        {
            "name": "courtServiceEmail",
            "baseName": "courtServiceEmail",
            "type": "string",
            "format": ""
        },
        {
            "name": "disciplinaryHistoryArray",
            "baseName": "disciplinaryHistoryArray",
            "type": "Array<BarSourceData1DisciplinaryHistoryArrayInner>",
            "format": ""
        },
        {
            "name": "disciplineSummariesArray",
            "baseName": "disciplineSummariesArray",
            "type": "Array<BarSourceData1DisciplineSummariesArrayInner>",
            "format": ""
        },
        {
            "name": "dismissalsArray",
            "baseName": "dismissalsArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "district",
            "baseName": "district",
            "type": "string",
            "format": ""
        },
        {
            "name": "employmentHistoryArray",
            "baseName": "employmentHistoryArray",
            "type": "Array<BarSourceData1EmploymentHistoryArrayInner>",
            "format": ""
        },
        {
            "name": "expirationDate",
            "baseName": "expirationDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "feesOptionsArray",
            "baseName": "feesOptionsArray",
            "type": "Array<BarSourceData1FeesOptionsArrayInner>",
            "format": ""
        },
        {
            "name": "firmSize",
            "baseName": "firmSize",
            "type": "string",
            "format": ""
        },
        {
            "name": "firmWebsite",
            "baseName": "firmWebsite",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstAdmittedDate",
            "baseName": "firstAdmittedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "firstAdmittedYear",
            "baseName": "firstAdmittedYear",
            "type": "number",
            "format": ""
        },
        {
            "name": "homeCounty",
            "baseName": "homeCounty",
            "type": "string",
            "format": ""
        },
        {
            "name": "inGoodStanding",
            "baseName": "inGoodStanding",
            "type": "string",
            "format": ""
        },
        {
            "name": "insurance",
            "baseName": "insurance",
            "type": "string",
            "format": ""
        },
        {
            "name": "involvementsArray",
            "baseName": "involvementsArray",
            "type": "Array<BarSourceData1InvolvementsArrayInner>",
            "format": ""
        },
        {
            "name": "judicialDistrict",
            "baseName": "judicialDistrict",
            "type": "string",
            "format": ""
        },
        {
            "name": "jurisType",
            "baseName": "jurisType",
            "type": "string",
            "format": ""
        },
        {
            "name": "languagesArray",
            "baseName": "languagesArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "lastRenewalDate",
            "baseName": "lastRenewalDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lawSchoolArray",
            "baseName": "lawSchoolArray",
            "type": "Array<BarSourceData1LawSchoolArrayInner>",
            "format": ""
        },
        {
            "name": "legalSpecialityArray",
            "baseName": "legalSpecialityArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "licenseType",
            "baseName": "licenseType",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "BarSourceData1Name",
            "format": ""
        },
        {
            "name": "nextRegistration",
            "baseName": "nextRegistration",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "nextRenewalDate",
            "baseName": "nextRenewalDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "openActionStatusArray",
            "baseName": "openActionStatusArray",
            "type": "Array<BarSourceData1OpenActionStatusArrayInner>",
            "format": ""
        },
        {
            "name": "otherJurisdictionArray",
            "baseName": "otherJurisdictionArray",
            "type": "Array<BarSourceData1OtherJurisdictionArrayInner>",
            "format": ""
        },
        {
            "name": "otherNameArray",
            "baseName": "otherNameArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "parish",
            "baseName": "parish",
            "type": "string",
            "format": ""
        },
        {
            "name": "pendingProceedingArray",
            "baseName": "pendingProceedingArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "string",
            "format": ""
        },
        {
            "name": "practiceAreaArray",
            "baseName": "practiceAreaArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "practiceLocationArray",
            "baseName": "practiceLocationArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "privateLawPractice",
            "baseName": "privateLawPractice",
            "type": "string",
            "format": ""
        },
        {
            "name": "profileLastCertified",
            "baseName": "profileLastCertified",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "publicHearingArray",
            "baseName": "publicHearingArray",
            "type": "Array<BarSourceData1PublicHearingArrayInner>",
            "format": ""
        },
        {
            "name": "reasonForInactivation",
            "baseName": "reasonForInactivation",
            "type": "BarSourceData1ReasonForInactivation",
            "format": ""
        },
        {
            "name": "sectionsArray",
            "baseName": "sectionsArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "servicesArray",
            "baseName": "servicesArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sourceInfo",
            "baseName": "sourceInfo",
            "type": "BarSourceData1SourceInfo",
            "format": ""
        },
        {
            "name": "statewideGrievanceCommitteeHistoryArray",
            "baseName": "statewideGrievanceCommitteeHistoryArray",
            "type": "Array<BarSourceData1StatewideGrievanceCommitteeHistoryArrayInner>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusDate",
            "baseName": "statusDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "statusHistoryArray",
            "baseName": "statusHistoryArray",
            "type": "Array<BarSourceData1StatusHistoryArrayInner>",
            "format": ""
        },
        {
            "name": "tenYearDisciplineArray",
            "baseName": "tenYearDisciplineArray",
            "type": "Array<BarSourceData1TenYearDisciplineArrayInner>",
            "format": ""
        },
        {
            "name": "undergraduateSchool",
            "baseName": "undergraduateSchool",
            "type": "string",
            "format": ""
        },
        {
            "name": "barLawFirm",
            "baseName": "barLawFirm",
            "type": "string",
            "format": ""
        },
        {
            "name": "yearsOfPractice",
            "baseName": "yearsOfPractice",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientsRepresentedArray",
            "baseName": "clientsRepresentedArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "statusHint",
            "baseName": "statusHint",
            "type": "string",
            "format": ""
        },
        {
            "name": "advancedDegreeArray",
            "baseName": "advancedDegreeArray",
            "type": "Array<BarSourceData1AdvancedDegreeArrayInner>",
            "format": ""
        },
        {
            "name": "barStatusArray",
            "baseName": "barStatusArray",
            "type": "Array<BarSourceData1BarStatusArrayInner>",
            "format": ""
        },
        {
            "name": "relatedCasesArray",
            "baseName": "relatedCasesArray",
            "type": "Array<BarSourceData1RelatedCasesArrayInner>",
            "format": ""
        }
    ];
    return BarSourceData1;
}());
exports.BarSourceData1 = BarSourceData1;
//# sourceMappingURL=BarSourceData1.js.map