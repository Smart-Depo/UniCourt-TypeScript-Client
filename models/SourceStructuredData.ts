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

import { GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataExtractedFields } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataExtractedFields';
import { GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInner } from '../models/GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInner';
import { HttpFile } from '../http/http';

export class SourceStructuredData {
    'rawOrderedDataArray': Array<GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInner>;
    'extractedFields': GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataExtractedFields | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "rawOrderedDataArray",
            "baseName": "rawOrderedDataArray",
            "type": "Array<GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataRawOrderedDataArrayInner>",
            "format": ""
        },
        {
            "name": "extractedFields",
            "baseName": "extractedFields",
            "type": "GetCase200ResponseSourceCaseDataSourcePageDataInnerAdditionalSourceDataExtractedFields",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SourceStructuredData.attributeTypeMap;
    }

    public constructor() {
    }
}

