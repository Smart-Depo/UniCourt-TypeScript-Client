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

import { Exception1 } from '../models/Exception1';
import { ExportFile1 } from '../models/ExportFile1';
import { HttpFile } from '../http/http';

export class CaseExportCallback {
    /**
    * Name of the object.
    */
    'object': string;
    /**
    * Unique Id for the Case Export Callback.
    */
    'caseExportCallbackId': string;
    /**
    * Unique Id for a Case in UniCourt.
    */
    'caseId': string;
    /**
    * Date when the job is run.
    */
    'callbackGeneratedDate': Date | null;
    /**
    * Status of the request.
    */
    'status': CaseExportCallbackStatusEnum;
    'caseExportCallbackAPI': string;
    'file': ExportFile1 | null;
    'exception': Exception1 | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseExportCallbackId",
            "baseName": "caseExportCallbackId",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseId",
            "baseName": "caseId",
            "type": "string",
            "format": ""
        },
        {
            "name": "callbackGeneratedDate",
            "baseName": "callbackGeneratedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CaseExportCallbackStatusEnum",
            "format": ""
        },
        {
            "name": "caseExportCallbackAPI",
            "baseName": "caseExportCallbackAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "ExportFile1",
            "format": ""
        },
        {
            "name": "exception",
            "baseName": "exception",
            "type": "Exception1",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CaseExportCallback.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CaseExportCallbackStatusEnum {
    Complete = 'COMPLETE',
    Failure = 'FAILURE',
    InProgress = 'IN_PROGRESS'
}

