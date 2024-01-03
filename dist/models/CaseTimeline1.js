"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseTimeline1 = void 0;
var CaseTimeline1 = (function () {
    function CaseTimeline1() {
    }
    CaseTimeline1.getAttributeTypeMap = function () {
        return CaseTimeline1.attributeTypeMap;
    };
    CaseTimeline1.discriminator = undefined;
    CaseTimeline1.attributeTypeMap = [
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
    return CaseTimeline1;
}());
exports.CaseTimeline1 = CaseTimeline1;
//# sourceMappingURL=CaseTimeline1.js.map