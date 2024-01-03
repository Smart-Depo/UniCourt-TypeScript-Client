"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCourtSystem1 = void 0;
var CaseCountAnalyticsByCourtSystem1 = (function () {
    function CaseCountAnalyticsByCourtSystem1() {
    }
    CaseCountAnalyticsByCourtSystem1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCourtSystem1.attributeTypeMap;
    };
    CaseCountAnalyticsByCourtSystem1.discriminator = undefined;
    CaseCountAnalyticsByCourtSystem1.attributeTypeMap = [
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
            "name": "courtSystem",
            "baseName": "courtSystem",
            "type": "CourtSystem1",
            "format": ""
        },
        {
            "name": "geo",
            "baseName": "Geo",
            "type": "CaseCountAnalyticsByCourt1Geo",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByCourtSystem1;
}());
exports.CaseCountAnalyticsByCourtSystem1 = CaseCountAnalyticsByCourtSystem1;
//# sourceMappingURL=CaseCountAnalyticsByCourtSystem1.js.map