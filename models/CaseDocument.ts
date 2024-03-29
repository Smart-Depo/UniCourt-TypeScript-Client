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

import { GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument } from '../models/GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument';
import { HttpFile } from '../http/http';

export class CaseDocument {
    /**
    * Name of the object
    */
    'object': string;
    /**
    * UniCourt\'s Case Document ID.
    */
    'caseDocumentId': string;
    /**
    * Order of documents how it is being stored in UniCourt.
    */
    'sortOrder': number | null;
    /**
    * Document name.
    */
    'name': string | null;
    /**
    * Description of the document.
    */
    'description': string | null;
    /**
    * Document Date when it was filed. The document date will be either explicitly provided byt the court or if the document is associatated to a docket entry then the document date will be of docket entry date.
    */
    'documentFiledDate': string | null;
    /**
    * Document ID which is the parent document for the current document. This will be null if the current document is a parent document.
    */
    'parentDocumentId': string | null;
    /**
    * List of child document ID\'s if exists or else it will be an empty lsit.
    */
    'childDocumentIdArray': Array<string>;
    /**
    * Total number of pages in the document.
    */
    'pages': number | null;
    /**
    * Determines if a preview is available for the case document.
    */
    'isPreviewAvailable': boolean;
    'previewDocument': GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument | null;
    /**
    * Price of the document.
    */
    'price': number | null;
    /**
    * Determines if the document is present in the UniCourt Library or not.
    */
    'inLibrary': boolean;
    /**
    * Date and time when the document was downloaded and added to the UniCourt Crowd Source Library.
    */
    'addedToLibraryDate': string | null;
    /**
    * Estimated duration of a Order.
    */
    'estimatedOrderDuration': CaseDocumentEstimatedOrderDurationEnum;
    /**
    * Link to either view the document if it is downloaded and already present in the UniCourt CrowdSourced Library.
    */
    'downloadAPI': string | null;
    /**
    * Is the date when the document was first fetched from the court site.
    */
    'firstFetchDate': string;
    /**
    * The status of source data of document. If the value of sourceDataStatus is SOURCE_DEPRECATED then it means that the Document has been migrated from old court site to a new court site and the data being shown in the API response is from a old court site. If the sourceDataStatus is NO_LONGER_AVAILABLE_IN_COURT then it means that a particular case is invalid in the court site.
    */
    'sourceDataStatus': CaseDocumentSourceDataStatusEnum | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseDocumentId",
            "baseName": "caseDocumentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentFiledDate",
            "baseName": "documentFiledDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentDocumentId",
            "baseName": "parentDocumentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "childDocumentIdArray",
            "baseName": "childDocumentIdArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "pages",
            "baseName": "pages",
            "type": "number",
            "format": ""
        },
        {
            "name": "isPreviewAvailable",
            "baseName": "isPreviewAvailable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "previewDocument",
            "baseName": "previewDocument",
            "type": "GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocumentsCaseDocumentArrayInnerPreviewDocument",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
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
            "name": "estimatedOrderDuration",
            "baseName": "estimatedOrderDuration",
            "type": "CaseDocumentEstimatedOrderDurationEnum",
            "format": ""
        },
        {
            "name": "downloadAPI",
            "baseName": "downloadAPI",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstFetchDate",
            "baseName": "firstFetchDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceDataStatus",
            "baseName": "sourceDataStatus",
            "type": "CaseDocumentSourceDataStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CaseDocument.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CaseDocumentEstimatedOrderDurationEnum {
    EstimateUnavailable = 'estimateUnavailable',
    WithinMinutes = 'withinMinutes',
    WithinHours = 'withinHours',
    WithinDays = 'withinDays',
    WithinWeeks = 'withinWeeks'
}
export enum CaseDocumentSourceDataStatusEnum {
    NoLongerAvailableInCourt = 'NO_LONGER_AVAILABLE_IN_COURT',
    SourceDeprecated = 'SOURCE_DEPRECATED',
    Sealed = 'SEALED',
    Null = 'null'
}

