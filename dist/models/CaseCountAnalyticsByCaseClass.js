"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCaseClass = void 0;
var CaseCountAnalyticsByCaseClass = (function () {
    function CaseCountAnalyticsByCaseClass() {
    }
    CaseCountAnalyticsByCaseClass.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCaseClass.attributeTypeMap;
    };
    CaseCountAnalyticsByCaseClass.discriminator = undefined;
    CaseCountAnalyticsByCaseClass.attributeTypeMap = [
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
    return CaseCountAnalyticsByCaseClass;
}());
exports.CaseCountAnalyticsByCaseClass = CaseCountAnalyticsByCaseClass;
//# sourceMappingURL=CaseCountAnalyticsByCaseClass.js.map