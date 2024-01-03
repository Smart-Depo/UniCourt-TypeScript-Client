"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetJudgeTypes200Response = void 0;
var GetJudgeTypes200Response = (function () {
    function GetJudgeTypes200Response() {
    }
    GetJudgeTypes200Response.getAttributeTypeMap = function () {
        return GetJudgeTypes200Response.attributeTypeMap;
    };
    GetJudgeTypes200Response.discriminator = undefined;
    GetJudgeTypes200Response.attributeTypeMap = [
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
    return GetJudgeTypes200Response;
}());
exports.GetJudgeTypes200Response = GetJudgeTypes200Response;
//# sourceMappingURL=GetJudgeTypes200Response.js.map