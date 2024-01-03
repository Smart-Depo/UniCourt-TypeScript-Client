"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCourtType = void 0;
var CaseCountAnalyticsByCourtType = (function () {
    function CaseCountAnalyticsByCourtType() {
    }
    CaseCountAnalyticsByCourtType.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCourtType.attributeTypeMap;
    };
    CaseCountAnalyticsByCourtType.discriminator = undefined;
    CaseCountAnalyticsByCourtType.attributeTypeMap = [
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
            "name": "courtType",
            "baseName": "courtType",
            "type": "CourtType1",
            "format": ""
        },
        {
            "name": "geo",
            "baseName": "Geo",
            "type": "CaseCountAnalyticsByCourt1Geo",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByCourtType;
}());
exports.CaseCountAnalyticsByCourtType = CaseCountAnalyticsByCourtType;
//# sourceMappingURL=CaseCountAnalyticsByCourtType.js.map