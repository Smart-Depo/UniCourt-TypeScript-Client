import { GetBillingUsageByBillingCycle200ResponseApiCallsBillable } from '../models/GetBillingUsageByBillingCycle200ResponseApiCallsBillable';
import { GetBillingUsageByBillingCycle200ResponseApiCallsCredited } from '../models/GetBillingUsageByBillingCycle200ResponseApiCallsCredited';
import { GetBillingUsageByBillingCycle200ResponseApiCallsMade } from '../models/GetBillingUsageByBillingCycle200ResponseApiCallsMade';
import { GetBillingUsageByBillingCycle200ResponseBillingCycle } from '../models/GetBillingUsageByBillingCycle200ResponseBillingCycle';
export declare class BillingCycleUsageResponse {
    'object': string;
    'billingCycle': GetBillingUsageByBillingCycle200ResponseBillingCycle;
    'days': any;
    'apiUsage': any;
    'apiCallsMade': GetBillingUsageByBillingCycle200ResponseApiCallsMade;
    'apiCallsCredited': GetBillingUsageByBillingCycle200ResponseApiCallsCredited;
    'apiCallsBillable': GetBillingUsageByBillingCycle200ResponseApiCallsBillable;
    'totalCasesTracked': number;
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
