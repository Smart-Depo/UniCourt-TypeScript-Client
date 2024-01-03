"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCase200ResponseJudges = void 0;
var GetCase200ResponseJudges = (function () {
    function GetCase200ResponseJudges() {
    }
    GetCase200ResponseJudges.getAttributeTypeMap = function () {
        return GetCase200ResponseJudges.attributeTypeMap;
    };
    GetCase200ResponseJudges.discriminator = undefined;
    GetCase200ResponseJudges.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "judgeArray",
            "baseName": "judgeArray",
            "type": "Array<GetCase200ResponseJudgesJudgeArrayInner>",
            "format": ""
        },
        {
            "name": "nextPageAPI",
            "baseName": "nextPageAPI",
            "type": "string",
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
    return GetCase200ResponseJudges;
}());
exports.GetCase200ResponseJudges = GetCase200ResponseJudges;
//# sourceMappingURL=GetCase200ResponseJudges.js.map