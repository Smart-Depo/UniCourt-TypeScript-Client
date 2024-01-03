"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByJurisdictionGeo = void 0;
var CaseCountAnalyticsByJurisdictionGeo = (function () {
    function CaseCountAnalyticsByJurisdictionGeo() {
    }
    CaseCountAnalyticsByJurisdictionGeo.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByJurisdictionGeo.attributeTypeMap;
    };
    CaseCountAnalyticsByJurisdictionGeo.discriminator = undefined;
    CaseCountAnalyticsByJurisdictionGeo.attributeTypeMap = [
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
    return CaseCountAnalyticsByJurisdictionGeo;
}());
exports.CaseCountAnalyticsByJurisdictionGeo = CaseCountAnalyticsByJurisdictionGeo;
//# sourceMappingURL=CaseCountAnalyticsByJurisdictionGeo.js.map