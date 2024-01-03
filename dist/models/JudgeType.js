"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JudgeType = void 0;
var JudgeType = (function () {
    function JudgeType() {
    }
    JudgeType.getAttributeTypeMap = function () {
        return JudgeType.attributeTypeMap;
    };
    JudgeType.discriminator = undefined;
    JudgeType.attributeTypeMap = [
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
    return JudgeType;
}());
exports.JudgeType = JudgeType;
//# sourceMappingURL=JudgeType.js.map