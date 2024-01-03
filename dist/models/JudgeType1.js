"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JudgeType1 = void 0;
var JudgeType1 = (function () {
    function JudgeType1() {
    }
    JudgeType1.getAttributeTypeMap = function () {
        return JudgeType1.attributeTypeMap;
    };
    JudgeType1.discriminator = undefined;
    JudgeType1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "judgeTypeId",
            "baseName": "judgeTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return JudgeType1;
}());
exports.JudgeType1 = JudgeType1;
//# sourceMappingURL=JudgeType1.js.map