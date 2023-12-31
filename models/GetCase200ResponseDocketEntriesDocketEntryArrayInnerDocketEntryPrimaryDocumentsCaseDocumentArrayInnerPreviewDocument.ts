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

export class GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument {
    /**
    * Name of the object
    */
    'object': string;
    /**
    * Determines if the preview document is present in the UniCourt Library or not.
    */
    'inLibrary': boolean;
    /**
    * Date and time when the preview document was downloaded and added to the UniCourt CrowdSourced Library.
    */
    'addedToLibraryDate': string | null;
    /**
    * Link to get the file url for the preview document which is already present in the UniCourt CrowdSourced Library.
    */
    'downloadAPI': string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "inLibrary",
            "baseName": "inLibrary",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "addedToLibraryDate",
            "baseName": "addedToLibraryDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "downloadAPI",
            "baseName": "downloadAPI",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument.attributeTypeMap;
    }

    public constructor() {
    }
}

