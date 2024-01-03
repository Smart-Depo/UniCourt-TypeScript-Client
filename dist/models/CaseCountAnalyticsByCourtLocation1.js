"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCourtLocation1 = void 0;
var CaseCountAnalyticsByCourtLocation1 = (function () {
    function CaseCountAnalyticsByCourtLocation1() {
    }
    CaseCountAnalyticsByCourtLocation1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCourtLocation1.attributeTypeMap;
    };
    CaseCountAnalyticsByCourtLocation1.discriminator = undefined;
    CaseCountAnalyticsByCourtLocation1.attributeTypeMap = [
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
            "name": "courtLocation",
            "baseName": "courtLocation",
            "type": "CourtLocation1",
            "format": ""
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
    return CaseCountAnalyticsByCourtLocation1;
}());
exports.CaseCountAnalyticsByCourtLocation1 = CaseCountAnalyticsByCourtLocation1;
//# sourceMappingURL=CaseCountAnalyticsByCourtLocation1.js.map