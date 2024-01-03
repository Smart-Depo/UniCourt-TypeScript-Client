"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCaseType1 = void 0;
var CaseCountAnalyticsByCaseType1 = (function () {
    function CaseCountAnalyticsByCaseType1() {
    }
    CaseCountAnalyticsByCaseType1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCaseType1.attributeTypeMap;
    };
    CaseCountAnalyticsByCaseType1.discriminator = undefined;
    CaseCountAnalyticsByCaseType1.attributeTypeMap = [
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
            "name": "caseType",
            "baseName": "caseType",
            "type": "CaseType1",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByCaseType1;
}());
exports.CaseCountAnalyticsByCaseType1 = CaseCountAnalyticsByCaseType1;
//# sourceMappingURL=CaseCountAnalyticsByCaseType1.js.map