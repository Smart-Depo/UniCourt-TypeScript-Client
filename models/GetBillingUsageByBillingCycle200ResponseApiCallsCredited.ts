/**
 * UniCourt Enterprise APIs
 * <button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button> 
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Total number of callbackFailures including caseUpdate, caseDocumentOrder and caseExport for the billing cycle.
*/
export class GetBillingUsageByBillingCycle200ResponseApiCallsCredited {
    /**
    * Total API calls credited back for the billing cycle
    */
    'count': number;
    /**
    * Last Updated date and time for the field apiCallsCredited
    */
    'lastUpdated': Date | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "lastUpdated",
            "baseName": "lastUpdated",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return GetBillingUsageByBillingCycle200ResponseApiCallsCredited.attributeTypeMap;
    }

    public constructor() {
    }
}
