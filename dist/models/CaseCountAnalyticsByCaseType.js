"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCaseType = void 0;
var CaseCountAnalyticsByCaseType = (function () {
    function CaseCountAnalyticsByCaseType() {
    }
    CaseCountAnalyticsByCaseType.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCaseType.attributeTypeMap;
    };
    CaseCountAnalyticsByCaseType.discriminator = undefined;
    CaseCountAnalyticsByCaseType.attributeTypeMap = [
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
    return CaseCountAnalyticsByCaseType;
}());
exports.CaseCountAnalyticsByCaseType = CaseCountAnalyticsByCaseType;
//# sourceMappingURL=CaseCountAnalyticsByCaseType.js.map