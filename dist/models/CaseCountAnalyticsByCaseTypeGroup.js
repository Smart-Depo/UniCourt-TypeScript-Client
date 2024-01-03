"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCaseTypeGroup = void 0;
var CaseCountAnalyticsByCaseTypeGroup = (function () {
    function CaseCountAnalyticsByCaseTypeGroup() {
    }
    CaseCountAnalyticsByCaseTypeGroup.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCaseTypeGroup.attributeTypeMap;
    };
    CaseCountAnalyticsByCaseTypeGroup.discriminator = undefined;
    CaseCountAnalyticsByCaseTypeGroup.attributeTypeMap = [
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
    return CaseCountAnalyticsByCaseTypeGroup;
}());
exports.CaseCountAnalyticsByCaseTypeGroup = CaseCountAnalyticsByCaseTypeGroup;
//# sourceMappingURL=CaseCountAnalyticsByCaseTypeGroup.js.map