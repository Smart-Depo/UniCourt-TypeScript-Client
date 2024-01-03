import { CaseTimeline1 } from '../models/CaseTimeline1';
import { SOSDataPreview1 } from '../models/SOSDataPreview1';
export declare class AssociatedNormLawFirm {
    'object': string;
    'normLawFirmId': string;
    'normLawFirmAPI': string;
    'caseTimeline': CaseTimeline1;
    'name': string;
    'caseSearchAPI': string;
    'caseCount': number;
    'sosDataArray': Array<SOSDataPreview1>;
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
