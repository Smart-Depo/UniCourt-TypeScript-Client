"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByJurisdictionGeoResponse = void 0;
var CaseCountAnalyticsByJurisdictionGeoResponse = (function () {
    function CaseCountAnalyticsByJurisdictionGeoResponse() {
    }
    CaseCountAnalyticsByJurisdictionGeoResponse.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByJurisdictionGeoResponse.attributeTypeMap;
    };
    CaseCountAnalyticsByJurisdictionGeoResponse.discriminator = undefined;
    CaseCountAnalyticsByJurisdictionGeoResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextPageAPI",
            "baseName": "nextPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "previousPageAPI",
            "baseName": "previousPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<CaseCountAnalyticsByJurisdictionGeo1>",
            "format": ""
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalCaseCount",
            "baseName": "totalCaseCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalJurisdictionGeoCount",
            "baseName": "totalJurisdictionGeoCount",
            "type": "number",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByJurisdictionGeoResponse;
}());
exports.CaseCountAnalyticsByJurisdictionGeoResponse = CaseCountAnalyticsByJurisdictionGeoResponse;
//# sourceMappingURL=CaseCountAnalyticsByJurisdictionGeoResponse.js.map