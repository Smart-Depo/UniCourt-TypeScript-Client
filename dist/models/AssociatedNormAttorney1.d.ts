import { BarRecordPreview1 } from '../models/BarRecordPreview1';
import { CaseTimeline1 } from '../models/CaseTimeline1';
export declare class AssociatedNormAttorney1 {
    'object': string;
    'normAttorneyAPI': string;
    'normAttorneyId': string;
    'caseTimeline': CaseTimeline1;
    'name': string;
    'firstName': string;
    'middleName': string | null;
    'lastName': string;
    'caseSearchAPI': string;
    'caseCount': number;
    'stateBarDataArray': Array<BarRecordPreview1>;
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
