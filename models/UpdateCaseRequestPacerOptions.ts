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

import { UpdateCaseRequestPacerOptionsAdditionalPageArrayInner } from '../models/UpdateCaseRequestPacerOptionsAdditionalPageArrayInner';
import { HttpFile } from '../http/http';

/**
* Applicable for PACER cases.
*/
export class UpdateCaseRequestPacerOptions {
    /**
    * **Your PACER credentials username. This is mandatory when a PACER Case is being requested in the API. For Non PACER cases this is not mandatory. Suppose your request consists of Non PACER and PACER Cases then this needs to be passed becuase you are requesting a PACER case too.**
    */
    'pacerUserId': string;
    /**
    * PACER Client Code. This is mandatory if your setting in PACER website is set to True for required client code.
    */
    'pacerClientCode'?: string | null;
    /**
    * **Currently this option is only applicable for Federal PACER cases. You can limit how often parties and attorneys for a PACER case are fetched to reduce your PACER fees. If you are tracking cases daily or hourly you could easily end up with a large PACER bill.**  **Use Case: Cases are typically updated to check for new docket entry filings. However every update to PACER case costs money. Participants for a case change less often than docket entry filings. So fetching participants for every update might result in unnecessary PACER costs; especially on cases which have a lot of parties and attorneys. So instead of getting charged the minimum cost of $0.10 for an update which might have had few docket entries, you could end up spending $3 for every update because there were a lot of parties for that case that were also fetched.**  **With this option you can choose when to fetch parties for case based on when was it last fetched.** You can limit how often this participants are fetched in a PACER case to keep your PACER costs under control.  Min days is 0 and Max days is 100.  Example: 1.  Specifying a value of 0 ensures that participants are fetched from PACER for this case update irrespective of when the participants were last fetched. 2.  Specifying a value of 30 ensures that participants are fetched from PACER for this case update only if the last fetch was older than 30 days. 
    */
    'fetchParticipantsIfOlderThanDays'?: number;
    /**
    * This flag determines whether to pull only new or pull all the docket entries for a PACER case being requested.  Only one of the two values is allowed: -   fetchNewDocketEntries:     >   Updates the PACER case with only new docket entries that have been added after the previous update of the case being requested. -   fetchAllDocketEntries:     >   Updates the PACER case by re-parsing all dockets from #1 till latest docket entry available. 
    */
    'refreshType'?: UpdateCaseRequestPacerOptionsRefreshTypeEnum | null;
    /**
    * Currently this option is only applicable for Federal PACER cases. The default behavior of the Case Update is to fetch the Docket Report from PACER which includes the parties and attorneys too.  However if you need to fetch information for other pages in PACER you will need to specify it here. - associatedCases: > This will fetch the Associated Cases page in PACER if available. This page consists of related cases especially applicable for Multi-District Litigation cases and Member Cases. Including this option will internally link all related cases in our system. Data from this page will be available via the Related Cases API. - caseSummary: > This will fetch the Case Summary page in PACER if available. This page consists of additional case info which is not present in the Docket Report page. Data from this page will be structured and available as response in the Case API’s ```additional_info``` field. - listOfCreditors: > This page will fetch the “List Of Creditors” page for PACER Bankruptcy cases of case type \"bk\". Note that this page cannot be extracted for Bankruptcy cases of case type \"ap\" (Adversary Proceedings). This page consists of the Creditor information like the name and address of the Creditors. Data from this page will be structured and available as response in the Case API. 
    */
    'additionalPageArray'?: Array<UpdateCaseRequestPacerOptionsAdditionalPageArrayInner> | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pacerUserId",
            "baseName": "pacerUserId",
            "type": "string",
            "format": ""
        },
        {
            "name": "pacerClientCode",
            "baseName": "pacerClientCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "fetchParticipantsIfOlderThanDays",
            "baseName": "fetchParticipantsIfOlderThanDays",
            "type": "number",
            "format": ""
        },
        {
            "name": "refreshType",
            "baseName": "refreshType",
            "type": "UpdateCaseRequestPacerOptionsRefreshTypeEnum",
            "format": ""
        },
        {
            "name": "additionalPageArray",
            "baseName": "additionalPageArray",
            "type": "Array<UpdateCaseRequestPacerOptionsAdditionalPageArrayInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateCaseRequestPacerOptions.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum UpdateCaseRequestPacerOptionsRefreshTypeEnum {
    FetchNewDocketEntries = 'fetchNewDocketEntries',
    FetchAllDocketEntries = 'fetchAllDocketEntries'
}
