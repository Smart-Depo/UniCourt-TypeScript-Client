"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCourt = void 0;
var CaseCountAnalyticsByCourt = (function () {
    function CaseCountAnalyticsByCourt() {
    }
    CaseCountAnalyticsByCourt.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCourt.attributeTypeMap;
    };
    CaseCountAnalyticsByCourt.discriminator = undefined;
    CaseCountAnalyticsByCourt.attributeTypeMap = [
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
            "name": "court",
            "baseName": "court",
            "type": "Court1",
            "format": ""
        },
        {
            "name": "geo",
            "baseName": "Geo",
            "type": "CaseCountAnalyticsByCourt1Geo",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByCourt;
}());
exports.CaseCountAnalyticsByCourt = CaseCountAnalyticsByCourt;
//# sourceMappingURL=CaseCountAnalyticsByCourt.js.map