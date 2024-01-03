"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByAreaOfLaw = void 0;
var CaseCountAnalyticsByAreaOfLaw = (function () {
    function CaseCountAnalyticsByAreaOfLaw() {
    }
    CaseCountAnalyticsByAreaOfLaw.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByAreaOfLaw.attributeTypeMap;
    };
    CaseCountAnalyticsByAreaOfLaw.discriminator = undefined;
    CaseCountAnalyticsByAreaOfLaw.attributeTypeMap = [
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
            "name": "areaOfLaw",
            "baseName": "areaOfLaw",
            "type": "AreaOfLaw1",
            "format": ""
        }
    ];
    return CaseCountAnalyticsByAreaOfLaw;
}());
exports.CaseCountAnalyticsByAreaOfLaw = CaseCountAnalyticsByAreaOfLaw;
//# sourceMappingURL=CaseCountAnalyticsByAreaOfLaw.js.map