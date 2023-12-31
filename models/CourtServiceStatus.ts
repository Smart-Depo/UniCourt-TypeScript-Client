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

import { GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus } from '../models/GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus';
import { HttpFile } from '../http/http';

export class CourtServiceStatus {
    /**
    * Name of the object
    */
    'object': string;
    /**
    * Court Service Status Object ID
    */
    'courtServiceStatusId': string;
    /**
    * All the court ids associated to the service status
    */
    'courtIdArray': Array<string> | null;
    /**
    * All the court location ids associated to the service status
    */
    'courtLocationIdArray': Array<string> | null;
    /**
    * All the Case class ids associated to the service status
    */
    'caseClassIdArray': Array<string> | null;
    /**
    * Date when the service status was last fetched.
    */
    'serviceStatusAsOn': string | null;
    'caseUpdateServiceStatus': GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus | null;
    'caseTrackServiceStatus': GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus | null;
    'caseDocumentOrderServiceStatus': GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtServiceStatusId",
            "baseName": "courtServiceStatusId",
            "type": "string",
            "format": ""
        },
        {
            "name": "courtIdArray",
            "baseName": "courtIdArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "courtLocationIdArray",
            "baseName": "courtLocationIdArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "caseClassIdArray",
            "baseName": "caseClassIdArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "serviceStatusAsOn",
            "baseName": "serviceStatusAsOn",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseUpdateServiceStatus",
            "baseName": "caseUpdateServiceStatus",
            "type": "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus",
            "format": ""
        },
        {
            "name": "caseTrackServiceStatus",
            "baseName": "caseTrackServiceStatus",
            "type": "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus",
            "format": ""
        },
        {
            "name": "caseDocumentOrderServiceStatus",
            "baseName": "caseDocumentOrderServiceStatus",
            "type": "GetCourtsServiceStatus200ResponseCourtServiceStatusArrayInnerCaseUpdateServiceStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CourtServiceStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

