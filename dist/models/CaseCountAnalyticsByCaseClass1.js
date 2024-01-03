"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCaseClass1 = void 0;
var CaseCountAnalyticsByCaseClass1 = (function () {
    function CaseCountAnalyticsByCaseClass1() {
    }
    CaseCountAnalyticsByCaseClass1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCaseClass1.attributeTypeMap;
    };
    CaseCountAnalyticsByCaseClass1.discriminator = undefined;
    CaseCountAnalyticsByCaseClass1.attributeTypeMap = [
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
            "name": "caseClass",
            "baseName": "caseClass",
            "type": "CaseClass1",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByCaseClass1;
}());
exports.CaseCountAnalyticsByCaseClass1 = CaseCountAnalyticsByCaseClass1;
//# sourceMappingURL=CaseCountAnalyticsByCaseClass1.js.map