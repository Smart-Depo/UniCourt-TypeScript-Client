import { Charge1 } from '../models/Charge1';
import { ChargeAdditionalData1 } from '../models/ChargeAdditionalData1';
import { ChargeDegree1 } from '../models/ChargeDegree1';
import { ChargeSeverity1 } from '../models/ChargeSeverity1';
export declare class GetCase200ResponseChargeArrayInner {
    'object': string;
    'charge': Charge1 | null;
    'chargeDegree': ChargeDegree1 | null;
    'chargeSeverity': ChargeSeverity1 | null;
    'chargeAdditionalDataArray': Array<ChargeAdditionalData1>;
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
