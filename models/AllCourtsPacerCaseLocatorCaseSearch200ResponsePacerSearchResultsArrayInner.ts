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

import { AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent } from '../models/AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent';
import { CaseSearchResult1 } from '../models/CaseSearchResult1';
import { HttpFile } from '../http/http';

export class AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInner {
    /**
    * Name of the object
    */
    'object': string;
    'pacerContent': AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent;
    /**
    * This field determines if the UniCourt Content has only meta information. If the value is true and you require to get the latest updates of the case you will need to make a request to the updateCase API.
    */
    'hasOnlyMetaInfo': boolean;
    'uniCourtContent': CaseSearchResult1;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "pacerContent",
            "baseName": "pacerContent",
            "type": "AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInnerPacerContent",
            "format": ""
        },
        {
            "name": "hasOnlyMetaInfo",
            "baseName": "hasOnlyMetaInfo",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "uniCourtContent",
            "baseName": "uniCourtContent",
            "type": "CaseSearchResult1",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AllCourtsPacerCaseLocatorCaseSearch200ResponsePacerSearchResultsArrayInner.attributeTypeMap;
    }

    public constructor() {
    }
}
