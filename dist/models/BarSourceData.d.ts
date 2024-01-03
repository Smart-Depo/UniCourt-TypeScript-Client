import { BarSourceData1AdministrativeActionsArrayInner } from '../models/BarSourceData1AdministrativeActionsArrayInner';
import { BarSourceData1AdvancedDegreeArrayInner } from '../models/BarSourceData1AdvancedDegreeArrayInner';
import { BarSourceData1BarStatusArrayInner } from '../models/BarSourceData1BarStatusArrayInner';
import { BarSourceData1BoardCertificationsArrayInner } from '../models/BarSourceData1BoardCertificationsArrayInner';
import { BarSourceData1CommitteesArrayInner } from '../models/BarSourceData1CommitteesArrayInner';
import { BarSourceData1CourtHistoryArrayInner } from '../models/BarSourceData1CourtHistoryArrayInner';
import { BarSourceData1CourtOfAdmissions } from '../models/BarSourceData1CourtOfAdmissions';
import { BarSourceData1DisciplinaryHistoryArrayInner } from '../models/BarSourceData1DisciplinaryHistoryArrayInner';
import { BarSourceData1DisciplineSummariesArrayInner } from '../models/BarSourceData1DisciplineSummariesArrayInner';
import { BarSourceData1EmploymentHistoryArrayInner } from '../models/BarSourceData1EmploymentHistoryArrayInner';
import { BarSourceData1FeesOptionsArrayInner } from '../models/BarSourceData1FeesOptionsArrayInner';
import { BarSourceData1InvolvementsArrayInner } from '../models/BarSourceData1InvolvementsArrayInner';
import { BarSourceData1LawSchoolArrayInner } from '../models/BarSourceData1LawSchoolArrayInner';
import { BarSourceData1Name } from '../models/BarSourceData1Name';
import { BarSourceData1OpenActionStatusArrayInner } from '../models/BarSourceData1OpenActionStatusArrayInner';
import { BarSourceData1OtherJurisdictionArrayInner } from '../models/BarSourceData1OtherJurisdictionArrayInner';
import { BarSourceData1PublicHearingArrayInner } from '../models/BarSourceData1PublicHearingArrayInner';
import { BarSourceData1ReasonForInactivation } from '../models/BarSourceData1ReasonForInactivation';
import { BarSourceData1RelatedCasesArrayInner } from '../models/BarSourceData1RelatedCasesArrayInner';
import { BarSourceData1SourceInfo } from '../models/BarSourceData1SourceInfo';
import { BarSourceData1StatewideGrievanceCommitteeHistoryArrayInner } from '../models/BarSourceData1StatewideGrievanceCommitteeHistoryArrayInner';
import { BarSourceData1StatusHistoryArrayInner } from '../models/BarSourceData1StatusHistoryArrayInner';
import { BarSourceData1TenYearDisciplineArrayInner } from '../models/BarSourceData1TenYearDisciplineArrayInner';
export declare class BarSourceData {
    'object': string;
    'administrativeActionsArray': Array<BarSourceData1AdministrativeActionsArrayInner>;
    'admissionType': string | null;
    'appellateCourtDistrict': string | null;
    'appellateDivisionDepartment': string | null;
    'attorneyGroup': string | null;
    'authorized': string | null;
    'barServiceClass': string | null;
    'bio': string | null;
    'boardCertificationsArray': Array<BarSourceData1BoardCertificationsArrayInner>;
    'boardDistrict': string | null;
    'circuit': string | null;
    'comments': string | null;
    'committeesArray': Array<BarSourceData1CommitteesArrayInner>;
    'courtHistoryArray': Array<BarSourceData1CourtHistoryArrayInner>;
    'courtOfAdmissions': BarSourceData1CourtOfAdmissions | null;
    'courtServiceEmail': string | null;
    'disciplinaryHistoryArray': Array<BarSourceData1DisciplinaryHistoryArrayInner>;
    'disciplineSummariesArray': Array<BarSourceData1DisciplineSummariesArrayInner>;
    'dismissalsArray': Array<string>;
    'district': string | null;
    'employmentHistoryArray': Array<BarSourceData1EmploymentHistoryArrayInner>;
    'expirationDate': Date | null;
    'feesOptionsArray': Array<BarSourceData1FeesOptionsArrayInner>;
    'firmSize': string | null;
    'firmWebsite': string | null;
    'firstAdmittedDate': Date | null;
    'firstAdmittedYear': number | null;
    'homeCounty': string | null;
    'inGoodStanding': string | null;
    'insurance': string | null;
    'involvementsArray': Array<BarSourceData1InvolvementsArrayInner>;
    'judicialDistrict': string | null;
    'jurisType': string | null;
    'languagesArray': Array<string>;
    'lastRenewalDate': Date | null;
    'lawSchoolArray': Array<BarSourceData1LawSchoolArrayInner>;
    'legalSpecialityArray': Array<string>;
    'licenseType': string | null;
    'name': BarSourceData1Name;
    'nextRegistration': Date | null;
    'nextRenewalDate': Date | null;
    'openActionStatusArray': Array<BarSourceData1OpenActionStatusArrayInner>;
    'otherJurisdictionArray': Array<BarSourceData1OtherJurisdictionArrayInner>;
    'otherNameArray': Array<string>;
    'parish': string | null;
    'pendingProceedingArray': Array<string>;
    'position': string | null;
    'practiceAreaArray': Array<string>;
    'practiceLocationArray': Array<string>;
    'privateLawPractice': string | null;
    'profileLastCertified': Date | null;
    'publicHearingArray': Array<BarSourceData1PublicHearingArrayInner>;
    'reasonForInactivation': BarSourceData1ReasonForInactivation | null;
    'sectionsArray': Array<string>;
    'servicesArray': Array<string>;
    'sourceInfo': BarSourceData1SourceInfo | null;
    'statewideGrievanceCommitteeHistoryArray': Array<BarSourceData1StatewideGrievanceCommitteeHistoryArrayInner>;
    'status': string | null;
    'statusDate': Date | null;
    'statusHistoryArray': Array<BarSourceData1StatusHistoryArrayInner>;
    'tenYearDisciplineArray': Array<BarSourceData1TenYearDisciplineArrayInner>;
    'undergraduateSchool': string | null;
    'barLawFirm': string | null;
    'yearsOfPractice': string | null;
    'clientsRepresentedArray': Array<string>;
    'statusHint': string | null;
    'advancedDegreeArray': Array<BarSourceData1AdvancedDegreeArrayInner>;
    'barStatusArray': Array<BarSourceData1BarStatusArrayInner>;
    'relatedCasesArray': Array<BarSourceData1RelatedCasesArrayInner>;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}