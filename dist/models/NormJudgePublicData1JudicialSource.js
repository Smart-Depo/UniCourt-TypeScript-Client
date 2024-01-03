"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormJudgePublicData1JudicialSourceTypeEnum = exports.NormJudgePublicData1JudicialSource = void 0;
var NormJudgePublicData1JudicialSource = (function () {
    function NormJudgePublicData1JudicialSource() {
    }
    NormJudgePublicData1JudicialSource.getAttributeTypeMap = function () {
        return NormJudgePublicData1JudicialSource.attributeTypeMap;
    };
    NormJudgePublicData1JudicialSource.discriminator = undefined;
    NormJudgePublicData1JudicialSource.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "NormJudgePublicData1JudicialSourceTypeEnum",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }
    ];
    return NormJudgePublicData1JudicialSource;
}());
exports.NormJudgePublicData1JudicialSource = NormJudgePublicData1JudicialSource;
var NormJudgePublicData1JudicialSourceTypeEnum;
(function (NormJudgePublicData1JudicialSourceTypeEnum) {
    NormJudgePublicData1JudicialSourceTypeEnum["Website"] = "Website";
    NormJudgePublicData1JudicialSourceTypeEnum["Other"] = "Other";
})(NormJudgePublicData1JudicialSourceTypeEnum = exports.NormJudgePublicData1JudicialSourceTypeEnum || (exports.NormJudgePublicData1JudicialSourceTypeEnum = {}));
//# sourceMappingURL=NormJudgePublicData1JudicialSource.js.map