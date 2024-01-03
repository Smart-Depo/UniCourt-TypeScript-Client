"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTimeline = void 0;
var CaseTimeline = (function () {
    function CaseTimeline() {
    }
    CaseTimeline.getAttributeTypeMap = function () {
        return CaseTimeline.attributeTypeMap;
    };
    CaseTimeline.discriminator = undefined;
    CaseTimeline.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstCaseFiledDate",
            "baseName": "firstCaseFiledDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastCaseFiledDate",
            "baseName": "lastCaseFiledDate",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return CaseTimeline;
}());
exports.CaseTimeline = CaseTimeline;
//# sourceMappingURL=CaseTimeline.js.map