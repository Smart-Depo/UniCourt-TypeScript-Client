"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCountAnalyticsByAreaOfLaw1 = void 0;
var CaseCountAnalyticsByAreaOfLaw1 = (function () {
    function CaseCountAnalyticsByAreaOfLaw1() {
    }
    CaseCountAnalyticsByAreaOfLaw1.getAttributeTypeMap = function () {
        return CaseCountAnalyticsByAreaOfLaw1.attributeTypeMap;
    };
    CaseCountAnalyticsByAreaOfLaw1.discriminator = undefined;
    CaseCountAnalyticsByAreaOfLaw1.attributeTypeMap = [
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
    return CaseCountAnalyticsByAreaOfLaw1;
}());
exports.CaseCountAnalyticsByAreaOfLaw1 = CaseCountAnalyticsByAreaOfLaw1;
//# sourceMappingURL=CaseCountAnalyticsByAreaOfLaw1.js.map