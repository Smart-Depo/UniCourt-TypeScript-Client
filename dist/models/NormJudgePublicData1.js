"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormJudgePublicData1 = void 0;
var NormJudgePublicData1 = (function () {
    function NormJudgePublicData1() {
    }
    NormJudgePublicData1.getAttributeTypeMap = function () {
        return NormJudgePublicData1.attributeTypeMap;
    };
    NormJudgePublicData1.discriminator = undefined;
    NormJudgePublicData1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "judicialStatus",
            "baseName": "judicialStatus",
            "type": "string",
            "format": ""
        },
        {
            "name": "judicialSource",
            "baseName": "judicialSource",
            "type": "NormJudgePublicData1JudicialSource",
            "format": ""
        },
        {
            "name": "abaRatings",
            "baseName": "abaRatings",
            "type": "NormJudgePublicData1AbaRatings",
            "format": ""
        },
        {
            "name": "aliasArray",
            "baseName": "aliasArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "bio",
            "baseName": "bio",
            "type": "NormJudgePublicData1Bio",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "GetCase200ResponsePartiesPartyArrayInnerContact",
            "format": ""
        },
        {
            "name": "educationArray",
            "baseName": "educationArray",
            "type": "Array<NormJudgePublicData1EducationArrayInner>",
            "format": ""
        },
        {
            "name": "professionalCareerArray",
            "baseName": "professionalCareerArray",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "serviceHistoryArray",
            "baseName": "serviceHistoryArray",
            "type": "Array<ServiceHistory1>",
            "format": ""
        },
        {
            "name": "nameHistoryArray",
            "baseName": "nameHistoryArray",
            "type": "Array<NormJudgePublicData1NameHistoryArrayInner>",
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
            "name": "lastFetchDateWithUpdates",
            "baseName": "lastFetchDateWithUpdates",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return NormJudgePublicData1;
}());
exports.NormJudgePublicData1 = NormJudgePublicData1;
//# sourceMappingURL=NormJudgePublicData1.js.map