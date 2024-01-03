"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormAttorney = void 0;
var NormAttorney = (function () {
    function NormAttorney() {
    }
    NormAttorney.getAttributeTypeMap = function () {
        return NormAttorney.attributeTypeMap;
    };
    NormAttorney.discriminator = undefined;
    NormAttorney.attributeTypeMap = [
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
    return NormAttorney;
}());
exports.NormAttorney = NormAttorney;
//# sourceMappingURL=NormAttorney.js.map