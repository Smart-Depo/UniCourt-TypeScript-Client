"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormJudgePublicData1Bio = void 0;
var NormJudgePublicData1Bio = (function () {
    function NormJudgePublicData1Bio() {
    }
    NormJudgePublicData1Bio.getAttributeTypeMap = function () {
        return NormJudgePublicData1Bio.attributeTypeMap;
    };
    NormJudgePublicData1Bio.discriminator = undefined;
    NormJudgePublicData1Bio.attributeTypeMap = [
        {
            "name": "ethnicity",
            "baseName": "ethnicity",
            "type": "string",
            "format": ""
        },
        {
            "name": "birthCity",
            "baseName": "birthCity",
            "type": "string",
            "format": ""
        },
        {
            "name": "birthDate",
            "baseName": "birthDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "birthState",
            "baseName": "birthState",
            "type": "string",
            "format": ""
        },
        {
            "name": "deathCity",
            "baseName": "deathCity",
            "type": "string",
            "format": ""
        },
        {
            "name": "deathDate",
            "baseName": "deathDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "deathState",
            "baseName": "deathState",
            "type": "string",
            "format": ""
        },
        {
            "name": "politicalAffiliation",
            "baseName": "politicalAffiliation",
            "type": "string",
            "format": ""
        }
    ];
    return NormJudgePublicData1Bio;
}());
exports.NormJudgePublicData1Bio = NormJudgePublicData1Bio;
//# sourceMappingURL=NormJudgePublicData1Bio.js.map