"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCourtLocation = void 0;
var CaseCountAnalyticsByCourtLocation = (function () {
    function CaseCountAnalyticsByCourtLocation() {
    }
    CaseCountAnalyticsByCourtLocation.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCourtLocation.attributeTypeMap;
    };
    CaseCountAnalyticsByCourtLocation.discriminator = undefined;
    CaseCountAnalyticsByCourtLocation.attributeTypeMap = [
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
    return CaseCountAnalyticsByCourtLocation;
}());
exports.CaseCountAnalyticsByCourtLocation = CaseCountAnalyticsByCourtLocation;
//# sourceMappingURL=CaseCountAnalyticsByCourtLocation.js.map