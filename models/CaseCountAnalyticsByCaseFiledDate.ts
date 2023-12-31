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

export class CaseCountAnalyticsByCaseFiledDate {
    'object': string;
    'caseCount': number;
    /**
    * Link to cases for this criteria.
    */
    'caseSearchAPI': string;
    'groupedBy': CaseCountAnalyticsByCaseFiledDateGroupedByEnum;
    'year': number;
    'quarter': CaseCountAnalyticsByCaseFiledDateQuarterEnum | null;
    'monthString': CaseCountAnalyticsByCaseFiledDateMonthStringEnum | null;
    'monthInt': number | null;
    'weekOfYear': number | null;
    'weekOfMonth': number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseCount",
            "baseName": "caseCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "caseSearchAPI",
            "baseName": "caseSearchAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "groupedBy",
            "baseName": "groupedBy",
            "type": "CaseCountAnalyticsByCaseFiledDateGroupedByEnum",
            "format": ""
        },
        {
            "name": "year",
            "baseName": "year",
            "type": "number",
            "format": ""
        },
        {
            "name": "quarter",
            "baseName": "quarter",
            "type": "CaseCountAnalyticsByCaseFiledDateQuarterEnum",
            "format": ""
        },
        {
            "name": "monthString",
            "baseName": "monthString",
            "type": "CaseCountAnalyticsByCaseFiledDateMonthStringEnum",
            "format": ""
        },
        {
            "name": "monthInt",
            "baseName": "monthInt",
            "type": "number",
            "format": ""
        },
        {
            "name": "weekOfYear",
            "baseName": "weekOfYear",
            "type": "number",
            "format": ""
        },
        {
            "name": "weekOfMonth",
            "baseName": "weekOfMonth",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CaseCountAnalyticsByCaseFiledDate.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CaseCountAnalyticsByCaseFiledDateGroupedByEnum {
    Yearly = 'Yearly',
    Quarterly = 'Quarterly',
    Monthly = 'Monthly',
    Weekly = 'Weekly'
}
export enum CaseCountAnalyticsByCaseFiledDateQuarterEnum {
    Q1 = 'Q1',
    Q2 = 'Q2',
    Q3 = 'Q3',
    Q4 = 'Q4',
    Null = 'null'
}
export enum CaseCountAnalyticsByCaseFiledDateMonthStringEnum {
    January = 'January',
    February = 'February',
    March = 'March',
    April = 'April',
    May = 'May',
    June = 'June',
    July = 'July',
    August = 'August',
    September = 'September',
    October = 'October',
    November = 'November',
    December = 'December',
    Null = 'null'
}

