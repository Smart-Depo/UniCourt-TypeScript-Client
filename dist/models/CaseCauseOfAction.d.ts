import { CauseOfAction1 } from '../models/CauseOfAction1';
import { CauseOfActionAdditionalData1 } from '../models/CauseOfActionAdditionalData1';
export declare class CaseCauseOfAction {
    'object': string;
    'causeOfAction': CauseOfAction1 | null;
    'causeOfActionAdditionalDataArray': Array<CauseOfActionAdditionalData1>;
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
