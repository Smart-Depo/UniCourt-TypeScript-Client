"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByCourtSystem = void 0;
var CaseCountAnalyticsByCourtSystem = (function () {
    function CaseCountAnalyticsByCourtSystem() {
    }
    CaseCountAnalyticsByCourtSystem.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByCourtSystem.attributeTypeMap;
    };
    CaseCountAnalyticsByCourtSystem.discriminator = undefined;
    CaseCountAnalyticsByCourtSystem.attributeTypeMap = [
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
    return CaseCountAnalyticsByCourtSystem;
}());
exports.CaseCountAnalyticsByCourtSystem = CaseCountAnalyticsByCourtSystem;
//# sourceMappingURL=CaseCountAnalyticsByCourtSystem.js.map