"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCourtType1 = void 0;
var CaseCountAnalyticsByCourtType1 = (function () {
    function CaseCountAnalyticsByCourtType1() {
    }
    CaseCountAnalyticsByCourtType1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCourtType1.attributeTypeMap;
    };
    CaseCountAnalyticsByCourtType1.discriminator = undefined;
    CaseCountAnalyticsByCourtType1.attributeTypeMap = [
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
    return CaseCountAnalyticsByCourtType1;
}());
exports.CaseCountAnalyticsByCourtType1 = CaseCountAnalyticsByCourtType1;
//# sourceMappingURL=CaseCountAnalyticsByCourtType1.js.map