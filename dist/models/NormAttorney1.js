"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormAttorney1 = void 0;
var NormAttorney1 = (function () {
    function NormAttorney1() {
    }
    NormAttorney1.getAttributeTypeMap = function () {
        return NormAttorney1.attributeTypeMap;
    };
    NormAttorney1.discriminator = undefined;
    NormAttorney1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normAttorneyId",
            "baseName": "normAttorneyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseSearchAPI",
            "baseName": "caseSearchAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseAnalyticsAPI",
            "baseName": "caseAnalyticsAPI",
            "type": "CaseAnalyticsAPI1",
            "format": ""
        },
        {
            "name": "hasAssociatedPublicData",
            "baseName": "hasAssociatedPublicData",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "barRecordArray",
            "baseName": "barRecordArray",
            "type": "Array<BarRecord1>",
            "format": ""
        },
        {
            "name": "attorneyAnalyticsAPI",
            "baseName": "attorneyAnalyticsAPI",
            "type": "AttorneyAnalyticsAPI1",
            "format": ""
        },
        {
            "name": "similarNormAttorneyArray",
            "baseName": "similarNormAttorneyArray",
            "type": "Array<SimilarNormAttorney1>",
            "format": ""
        }
    ];
    return NormAttorney1;
}());
exports.NormAttorney1 = NormAttorney1;
//# sourceMappingURL=NormAttorney1.js.map