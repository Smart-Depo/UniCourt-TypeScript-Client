"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JudgeTypeResponse = void 0;
var JudgeTypeResponse = (function () {
    function JudgeTypeResponse() {
    }
    JudgeTypeResponse.getAttributeTypeMap = function () {
        return JudgeTypeResponse.attributeTypeMap;
    };
    JudgeTypeResponse.discriminator = undefined;
    JudgeTypeResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "judgeTypeArray",
            "baseName": "judgeTypeArray",
            "type": "Array<JudgeType1>",
            "format": ""
        },
        {
            "name": "nextPageAPI",
            "baseName": "nextPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "previousPageAPI",
            "baseName": "previousPageAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number",
            "format": ""
        }
    ];
    return JudgeTypeResponse;
}());
exports.JudgeTypeResponse = JudgeTypeResponse;
//# sourceMappingURL=JudgeTypeResponse.js.map