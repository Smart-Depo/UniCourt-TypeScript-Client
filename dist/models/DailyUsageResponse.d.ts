import { GetBillingUsageByBillingCycle200ResponseApiCallsBillable } from '../models/GetBillingUsageByBillingCycle200ResponseApiCallsBillable';
import { GetBillingUsageByBillingCycle200ResponseApiCallsCredited } from '../models/GetBillingUsageByBillingCycle200ResponseApiCallsCredited';
import { GetBillingUsageByBillingCycle200ResponseApiCallsMade } from '../models/GetBillingUsageByBillingCycle200ResponseApiCallsMade';
export declare class DailyUsageResponse {
    'object': string;
    'usageStartTime': Date;
    'usageEndTime': Date;
    'apiUsage': any;
    'apiCallsMade': GetBillingUsageByBillingCycle200ResponseApiCallsMade;
    'apiCallsCredited': GetBillingUsageByBillingCycle200ResponseApiCallsCredited;
    'apiCallsBillable': GetBillingUsageByBillingCycle200ResponseApiCallsBillable;
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
