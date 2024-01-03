"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByJurisdictionGeo1 = void 0;
var CaseCountAnalyticsByJurisdictionGeo1 = (function () {
    function CaseCountAnalyticsByJurisdictionGeo1() {
    }
    CaseCountAnalyticsByJurisdictionGeo1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByJurisdictionGeo1.attributeTypeMap;
    };
    CaseCountAnalyticsByJurisdictionGeo1.discriminator = undefined;
    CaseCountAnalyticsByJurisdictionGeo1.attributeTypeMap = [
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
            "name": "jurisdictionGeo",
            "baseName": "jurisdictionGeo",
            "type": "JurisdictionGeo1",
            "format": ""
        },
        {
            "name": "geo",
            "baseName": "Geo",
            "type": "CaseCountAnalyticsByCourt1Geo",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByJurisdictionGeo1;
}());
exports.CaseCountAnalyticsByJurisdictionGeo1 = CaseCountAnalyticsByJurisdictionGeo1;
//# sourceMappingURL=CaseCountAnalyticsByJurisdictionGeo1.js.map