"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCourt1 = void 0;
var CaseCountAnalyticsByCourt1 = (function () {
    function CaseCountAnalyticsByCourt1() {
    }
    CaseCountAnalyticsByCourt1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCourt1.attributeTypeMap;
    };
    CaseCountAnalyticsByCourt1.discriminator = undefined;
    CaseCountAnalyticsByCourt1.attributeTypeMap = [
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
    return CaseCountAnalyticsByCourt1;
}());
exports.CaseCountAnalyticsByCourt1 = CaseCountAnalyticsByCourt1;
//# sourceMappingURL=CaseCountAnalyticsByCourt1.js.map