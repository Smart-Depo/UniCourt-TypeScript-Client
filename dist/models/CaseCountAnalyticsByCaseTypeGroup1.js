"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCaseTypeGroup1 = void 0;
var CaseCountAnalyticsByCaseTypeGroup1 = (function () {
    function CaseCountAnalyticsByCaseTypeGroup1() {
    }
    CaseCountAnalyticsByCaseTypeGroup1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCaseTypeGroup1.attributeTypeMap;
    };
    CaseCountAnalyticsByCaseTypeGroup1.discriminator = undefined;
    CaseCountAnalyticsByCaseTypeGroup1.attributeTypeMap = [
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
            "name": "caseTypeGroup",
            "baseName": "caseTypeGroup",
            "type": "CaseTypeGroup1",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByCaseTypeGroup1;
}());
exports.CaseCountAnalyticsByCaseTypeGroup1 = CaseCountAnalyticsByCaseTypeGroup1;
//# sourceMappingURL=CaseCountAnalyticsByCaseTypeGroup1.js.map