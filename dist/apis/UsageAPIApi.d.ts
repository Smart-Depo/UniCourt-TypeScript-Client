import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { GetBillingCycles200Response } from '../models/GetBillingCycles200Response';
import { GetBillingUsageByBillingCycle200Response } from '../models/GetBillingUsageByBillingCycle200Response';
import { GetDailyUsageByDate200Response } from '../models/GetDailyUsageByDate200Response';
export declare class UsageAPIApiRequestFactory extends BaseAPIRequestFactory {
    getBillingCycles(_options?: Configuration): Promise<RequestContext>;
    getBillingUsageByBillingCycle(billingCycle: string, _options?: Configuration): Promise<RequestContext>;
    getDailyUsageByDate(date: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class UsageAPIApiResponseProcessor {
    getBillingCyclesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetBillingCycles200Response>>;
    getBillingUsageByBillingCycleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetBillingUsageByBillingCycle200Response>>;
    getDailyUsageByDateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetDailyUsageByDate200Response>>;
}
