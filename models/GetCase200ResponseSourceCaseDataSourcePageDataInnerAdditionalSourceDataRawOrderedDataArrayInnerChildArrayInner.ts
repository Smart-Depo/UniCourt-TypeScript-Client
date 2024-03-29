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

import { GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInnerChildArrayInner } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInnerChildArrayInner';
import { HttpFile } from '../http/http';

export class GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInner {
    /**
    * Any docket text that belongs to the main docket text is added in the child.
    */
    'childArray': Array<GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInnerChildArrayInner>;
    /**
    * Label of the docket from the source.
    */
    'lbl': string | null;
    /**
    * Structure order.
    */
    'ord': number;
    /**
    * List of available addresses.
    */
    'val': string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "childArray",
            "baseName": "childArray",
            "type": "Array<GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInnerChildArrayInner>",
            "format": ""
        },
        {
            "name": "lbl",
            "baseName": "lbl",
            "type": "string",
            "format": ""
        },
        {
            "name": "ord",
            "baseName": "ord",
            "type": "number",
            "format": ""
        },
        {
            "name": "val",
            "baseName": "val",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInnerChildArrayInner.attributeTypeMap;
    }

    public constructor() {
    }
}

