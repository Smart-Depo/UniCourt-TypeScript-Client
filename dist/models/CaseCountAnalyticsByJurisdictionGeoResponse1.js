"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByJurisdictionGeoResponse1 = void 0;
var CaseCountAnalyticsByJurisdictionGeoResponse1 = (function () {
    function CaseCountAnalyticsByJurisdictionGeoResponse1() {
    }
    CaseCountAnalyticsByJurisdictionGeoResponse1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByJurisdictionGeoResponse1.attributeTypeMap;
    };
    CaseCountAnalyticsByJurisdictionGeoResponse1.discriminator = undefined;
    CaseCountAnalyticsByJurisdictionGeoResponse1.attributeTypeMap = [
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
    return CaseCountAnalyticsByJurisdictionGeoResponse1;
}());
exports.CaseCountAnalyticsByJurisdictionGeoResponse1 = CaseCountAnalyticsByJurisdictionGeoResponse1;
//# sourceMappingURL=CaseCountAnalyticsByJurisdictionGeoResponse1.js.map