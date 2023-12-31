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
* Source Cause of Action data from the source site.
*/
export class SourceCauseOfAction {
    /**
    * Name of the object
    */
    'object': string;
    /**
    * Signifies if the cause of action is currently isVisible or not for the case.
    */
    'isVisible': boolean;
    /**
    * Raw Cause of Action data from the source site.
    */
    'sourceCauseOfActionRaw': string | null;
    /**
    * Cause of Action data from the source site.
    */
    'sourceCauseOfAction': string | null;
    /**
    * Statute of a Cause of Action.
    */
    'sourceStatute': string | null;
    /**
    * When this Cause of Action was first fetched from the court site.
    */
    'firstFetchDate': string;
    /**
    * When this Cause of Action was last fetched from the court site.
    */
    'lastFetchDate': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "isVisible",
            "baseName": "isVisible",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sourceCauseOfActionRaw",
            "baseName": "sourceCauseOfActionRaw",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceCauseOfAction",
            "baseName": "sourceCauseOfAction",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceStatute",
            "baseName": "sourceStatute",
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
            "name": "lastFetchDate",
            "baseName": "lastFetchDate",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SourceCauseOfAction.attributeTypeMap;
    }

    public constructor() {
    }
}

