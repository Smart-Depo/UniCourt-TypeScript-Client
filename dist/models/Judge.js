"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Judge = void 0;
var Judge = (function () {
    function Judge() {
    }
    Judge.getAttributeTypeMap = function () {
        return Judge.attributeTypeMap;
    };
    Judge.discriminator = undefined;
    Judge.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "judgeId",
            "baseName": "judgeId",
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
            "name": "namePrefix",
            "baseName": "namePrefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "nameSuffix",
            "baseName": "nameSuffix",
            "type": "string",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "GetCase200ResponsePartiesPartyArrayInnerContact",
            "format": ""
        },
        {
            "name": "judgeType",
            "baseName": "judgeType",
            "type": "JudgeType1",
            "format": ""
        },
        {
            "name": "sourceJudgeType",
            "baseName": "sourceJudgeType",
            "type": "string",
            "format": ""
        },
        {
            "name": "isVisible",
            "baseName": "isVisible",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "firstFetchDate",
            "baseName": "firstFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastFetchDate",
            "baseName": "lastFetchDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "possibleNormJudgeArray",
            "baseName": "possibleNormJudgeArray",
            "type": "Array<PossibleNormJudge1>",
            "format": ""
        }
    ];
    return Judge;
}());
exports.Judge = Judge;
//# sourceMappingURL=Judge.js.map