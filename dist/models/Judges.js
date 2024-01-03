"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Judges = void 0;
var Judges = (function () {
    function Judges() {
    }
    Judges.getAttributeTypeMap = function () {
        return Judges.attributeTypeMap;
    };
    Judges.discriminator = undefined;
    Judges.attributeTypeMap = [
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
    return Judges;
}());
exports.Judges = Judges;
//# sourceMappingURL=Judges.js.map